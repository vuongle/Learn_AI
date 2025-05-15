"""
This script demonstrates a basic RAG (Retrieval-Augmented Generation) implementation
using Langchain with Ollama embeddings and Chroma vector store.
It retrieves relevant documents based on semantic similarity to answer user queries about text content.
This example is the second half of the RAG system
"""

import os

from langchain_ollama import OllamaEmbeddings
from langchain_chroma import Chroma

# Define the directory containing the text file and the persistent directory
current_dir = os.path.dirname(os.path.abspath(__file__))
persistent_directory = os.path.join(current_dir, "db", "chroma_db")

# Define the embedding model
embeddings = OllamaEmbeddings(model="nomic-embed-text:latest")

# Load the existing vector store with the embedding function
db = Chroma(
    persist_directory=persistent_directory,
    embedding_function=embeddings,
)

# Define the user's question
query = "Who is Odysseus' wife?"

# Retrieve relevant documents based on the query
# "k": top k closest results
# "score_threshold": Only documents with a similarity score above the threshold (0.4) will be returned
# normalized to a 0-1 range where:
# - 0 represents maximum similarity
# - 1 represents minimum similarity
retriever = db.as_retriever(
    search_type="similarity_score_threshold",
    search_kwargs={"k": 3, "score_threshold": 0.4},
)
relevant_docs = retriever.invoke(query)

# Display the relevant results with metadata
print("\n--- Relevant Documents ---")
for i, doc in enumerate(relevant_docs, 1):
    print(f"Document {i}:\n{doc.page_content}\n")
    if doc.metadata:
        print(f"Source: {doc.metadata.get('source', 'Unknown')}\n")
