import os
from langchain_ollama import OllamaEmbeddings
from langchain_ollama import ChatOllama
from langchain_chroma import Chroma
from langchain.prompts import ChatPromptTemplate
from langchain.chains.history_aware_retriever import create_history_aware_retriever
from langchain.chains.retrieval import create_retrieval_chain
from langchain.schema.messages import SystemMessage, HumanMessage
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import MessagesPlaceholder

# Define the persistent directory
current_dir = os.path.dirname(os.path.abspath(__file__))
persistent_directory = os.path.join(current_dir, "db", "chroma_db_with_metadata")

# Define the embedding model
embeddings = OllamaEmbeddings(model="nomic-embed-text:latest")

# Load the existing vector store with the embedding function
db = Chroma(persist_directory=persistent_directory, embedding_function=embeddings)

# Create a retriever for querying the vector store
# `search_type` specifies the type of search (e.g., similarity)
# `search_kwargs` contains additional arguments for the search (e.g., number of results to return)
retriever = db.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 3},
)

# Define the chat model
llm = ChatOllama(model="llama3.2:latest")

# Contextualize question prompt
# This system prompt helps the AI understand that it should reformulate the question
# based on the chat history to make it a standalone question
contextualize_q_system_prompt = (
    "Given a chat history and the latest user question "
    "which might reference context in the chat history, "
    "formulate a standalone question which can be understood "
    "without the chat history. Do NOT answer the question, just "
    "reformulate it if needed and otherwise return it as is."
)

# Create a prompt template for contextualizing questions
contextualize_q_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", contextualize_q_system_prompt),
        MessagesPlaceholder("chat_history"),
        ("human", "{input}"),
    ]
)

# Create a history-aware retriever that takes conversation history and returns documents.
# This uses the LLM to help reformulate the question based on chat history
# Explanation:
# 1. It defines a system prompt that instructs the LLM to reformulate questions based on chat history
# 2. Creates a prompt template that includes the system prompt, chat history, and user input
# 3. Creates a history-aware retriever that:
#    - Takes the user's question and chat history
#    - Uses the LLM to reformulate the question into a standalone query
#    - Uses that reformulated query to retrieve relevant documents
# This solves the problem of contextual questions like "Who wrote it?" after previously asking about a specific book.
history_aware_retriever = create_history_aware_retriever(
    llm, retriever, contextualize_q_prompt
)

# Answer question prompt
# This system prompt helps the AI understand that it should provide concise answers
# based on the retrieved context and indicates what to do if the answer is unknown
qa_system_prompt = (
    "You are an assistant for question-answering tasks. Use "
    "the following pieces of retrieved context to answer the "
    "question. If you don't know the answer, just say that you "
    "don't know. Use three sentences maximum and keep the answer "
    "concise."
    "\n\n"
    "{context}"
)

# Create a prompt template for answering questions
qa_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", qa_system_prompt),
        MessagesPlaceholder("chat_history"),
        ("human", "{input}"),
    ]
)

# Create a chain to combine documents for question answering
# `create_stuff_documents_chain` feeds all retrieved context into the LLM
# Explanation:
# 1. Creates a system prompt for the question-answering task
# 2. Creates a prompt template that includes the system prompt, chat history, and user input
# 3. Creates a "stuff" documents chain that:
#    - Takes the retrieved documents and "stuffs" them into the context
#    - Uses the LLM to generate an answer based on the context and question
question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)

# Create a retrieval chain that combines the history-aware retriever and the question answering chain into a complete RAG pipeline.
rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)


# Function to simulate a continual chat
def continual_chat():
    print("Start chatting with the AI! Type 'exit' to end the conversation.")
    chat_history = []  # Collect chat history here (a sequence of messages)
    while True:
        query = input("You: ")
        if query.lower() == "exit":
            break
        # Process the user's query through the retrieval chain
        result = rag_chain.invoke({"input": query, "chat_history": chat_history})
        # Display the AI's response
        print(f"AI: {result['answer']}")
        # Update the chat history
        chat_history.append(HumanMessage(content=query))
        chat_history.append(SystemMessage(content=result["answer"]))


## The Complete Flow
# When a user asks a question:
# 1. The question and chat history are passed to the history-aware retriever
# 2. The retriever uses the LLM to reformulate the question if needed (making it standalone)
# 3. The reformulated question is used to retrieve relevant documents from the vector database
# 4. The retrieved documents, original question, and chat history are passed to the question-answering chain
# 5. The LLM generates an answer based on the retrieved context
# 6. The answer is returned to the user and added to the chat history
# Main function to start the continual chat
if __name__ == "__main__":
    continual_chat()

# MUST READ MORE: ABOUT DOCUMENT CHAINING, CONVERSATIONAL CHAIN
# https://levelup.gitconnected.com/creating-retrieval-chain-with-langchain-f359261e0b85
# https://vijaykumarkartha.medium.com/beginners-guide-to-retrieval-chain-from-langchain-f307b1a20e77
# https://vijaykumarkartha.medium.com/beginners-guide-to-conversational-retrieval-chain-using-langchain-3ddf1357f371
