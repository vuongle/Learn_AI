"""
This module implements a simple chatbot using the Hugging Face Transformers library
and Gradio for the user interface. It uses the BlenderBot model for generating responses
to user input in a chat-like interaction.
"""

import gradio as gr
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

MODEL_NAME = "facebook/blenderbot-400M-distill"
# loads the specific tokenizer that was used to train the BlenderBot model.
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
# load a pre-trained Seq2Seq model, which is then utilized to generate responses based on user input.
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME)


def chat(message, history):
    """
    Generates a response to the user's input message using the BlenderBot model.
    Args:
        message (str): The user's input message.
        history (list): A list of previous chat messages and their corresponding responses.
    Returns:
        str: The generated response to the user's input message.
    """

    # tokenizer does (encoding step):
    # - Splits your message into tokens
    # - Converts these tokens into numerical IDs
    # - Returns a PyTorch tensor ( "pt" ) that the model can process
    inputs = tokenizer(message, return_tensors="pt")

    # model does:
    # - Takes the input tensor (tokenized input)
    # - unpacks the dictionary of tensors created by the tokenizer
    # - processes the input and generates a sequence of token IDs
    reply_ids = model.generate(**inputs)

    # tokenizer does (decoding step):
    # - reply_ids[0] : Takes the first (and only) generated sequence
    # - Converts the numerical token IDs back into human-readable text
    response = tokenizer.decode(reply_ids[0], skip_special_tokens=True)
    return response


chatbotUI = gr.ChatInterface(
    chat, title="My Chatbot", description="Enter text to start chatting."
)

chatbotUI.launch()
