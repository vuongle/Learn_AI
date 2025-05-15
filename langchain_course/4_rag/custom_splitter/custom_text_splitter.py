from langchain_text_splitters.base import TextSplitter
from typing import List
from langchain_core.documents import Document


class CustomTextSplitter(TextSplitter):
    def split_text(self, text):
        # Custom logic for splitting text
        return text.split("\n\n")  # Example: split by paragraphs

    def split_documents(self, documents: List[Document]) -> List[Document]:
        # Extract the text from the first document
        if not documents:
            return []

        # Process all documents instead of just the first one
        all_splits = []
        for doc in documents:
            # Get the text content from the document
            text = doc.page_content

            # Split the text into chunks
            chunks = self.split_text(text)

            # Create new documents with the same metadata
            splits = [
                Document(page_content=chunk, metadata=doc.metadata) for chunk in chunks
            ]

            # Add the splits to our result list
            all_splits.extend(splits)

        return all_splits
