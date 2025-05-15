"""
This module implements a RAG (Retrieval Augmented Generation) system using LangChain.
It loads text documents, splits them into chunks, creates embeddings, and stores them
in a Chroma vector database for efficient retrieval.
This example is the first half of the RAG system, see flow_for_1a_2a_example.png
The other half is 1b_rag_basics.py
"""

import os
from langchain_community.document_loaders.text import TextLoader
from langchain_text_splitters.character import CharacterTextSplitter
from langchain_ollama import OllamaEmbeddings
from langchain_chroma import Chroma


# Define the directory containing the text file and the persistent directory
current_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_dir, "books", "odyssey.txt")
persistent_directory = os.path.join(current_dir, "db", "chroma_db")

# Check if the Chroma vector store already exists
if not os.path.exists(persistent_directory):
    print("Persistent directory does not exist. Initializing vector store...")

    # Ensure the text file exists
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Text file not found at {file_path}")

    # Read the text content from the file
    loader = TextLoader(file_path, encoding="utf-8")
    documents = loader.load()

    # Split the document into chunks
    # The splitter defaults to splitting based on a character sequence like '\n\n'
    # chunk_size: n characters for each chunk
    # chunk_overlap: specifies how many characters will be shared between the end of one chunk and the beginning of the next
    # n characters overlap between chunks
    text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    docs = text_splitter.split_documents(documents)

    # Display information about the split documents
    print("\n--- Document Chunks Information ---")
    print(f"Number of document chunks: {len(docs)}")
    print(f"Sample chunk:\n{docs[0].page_content}\n")

    # Create embeddings
    print("\n--- Creating embeddings ---")
    embeddings = OllamaEmbeddings(
        model="nomic-embed-text:latest"
    )  # Update to a valid embedding model if needed
    print("\n--- Finished creating embeddings ---")

    # Create the vector store and persist it automatically
    print("\n--- Creating vector store ---")
    db = Chroma.from_documents(docs, embeddings, persist_directory=persistent_directory)
    print("\n--- Finished creating vector store ---")

else:
    print("Vector store already exists. No need to initialize.")
