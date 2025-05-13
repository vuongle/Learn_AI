## 1. Ingest PDF Files
#  2. Extract Text from PDF Files and split into small chunks
#  3. Send the chunks to the embedding model
#  4. Save the embeddings to a vector database
#  5. Perform similarity search on the vector database to find similar documents
#  6. retrieve the similar documents and present them to the user
## run pip install -r requirements.txt to install the required packages

from langchain_community.document_loaders import UnstructuredPDFLoader

DOC_PATH = "./data/BOI.pdf"
MODEL = "llama3.2:3b"

# ==== 1. Ingest PDF Files ====
# Local PDF file uploads
data = None
if DOC_PATH:
    loader = UnstructuredPDFLoader(file_path=DOC_PATH)
    data = loader.load()
    print("done loading....")
else:
    print("Upload a PDF file")

# Preview first page
# content = data[0].page_content
# print(content[:100])


# ==== 2. Extract Text from PDF Files and split into small chunks ====
from langchain_community.vectorstores import Chroma
from langchain_ollama import OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Split and chunk
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1200, chunk_overlap=300)
chunks = text_splitter.split_documents(data)
print("done splitting....")

# print(f"Number of chunks: {len(chunks)}")
# print(f"Example chunk: {chunks[0]}")


# ===== 3. Send the chunks to the embedding model ===
# ===== 4. Save the embeddings to a vector database ===
import ollama

ollama.pull("nomic-embed-text")
vector_db = Chroma.from_documents(
    documents=chunks,
    embedding=OllamaEmbeddings(model="nomic-embed-text"),
    collection_name="simple-rag",
)
print("done adding to vector database....")

## === Retrieval ===
from langchain.prompts import ChatPromptTemplate, PromptTemplate
from langchain.retrievers.multi_query import MultiQueryRetriever
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_ollama import ChatOllama

# set up our model to use
llm = ChatOllama(model=MODEL)
# a simple technique to generate multiple questions from a single question and then retrieve documents
# based on those questions, getting the best of both worlds.
QUERY_PROMPT = PromptTemplate(
    input_variables=["question"],
    template="""You are an AI language model assistant. Your task is to generate five
    different versions of the given user question to retrieve relevant documents from
    a vector database. By generating multiple perspectives on the user question, your
    goal is to help the user overcome some of the limitations of the distance-based
    similarity search. Provide these alternative questions separated by newlines.
    Original question: {question}""",
)

retriever = MultiQueryRetriever.from_llm(
    vector_db.as_retriever(), llm, prompt=QUERY_PROMPT
)

# RAG prompt
template = """Answer the question based ONLY on the following context:
{context}
Question: {question}
"""

prompt = ChatPromptTemplate.from_template(template)

chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

# res = chain.invoke(input=("what is the document about?",))
# res = chain.invoke(
#     input=("what are the main points as a business owner I should be aware of?",)
# )
res = chain.invoke(input=("how to report BOI?",))

print(res)
