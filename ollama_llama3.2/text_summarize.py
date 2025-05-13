"""
This module provides functionality to summarize website content using Ollama API.
The Ollama API runs the local model that has been downloaded before.
It extracts text content from web pages and generates concise summaries.
"""

import ollama
import requests
import streamlit as st
from bs4 import BeautifulSoup

MODEL = "llama3.2"


class Website:
    url: str
    title: str
    text: str

    def __init__(self, url: str):
        self.url = url
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        self.title = soup.title.string if soup.title else "No title"
        for irrelevant in soup.body(["script", "style", "img", "input"]):
            irrelevant.decompose()
        self.text = soup.body.get_text(separator="\n", strip=True)


# Testing the Website class
# web = Website("https://www.anthropic.com")
# print(web.title)

# Types of prompts
# 1. System Prompt: Lời nhắc hệ thống cung cấp thông tin về nhiệm vụ cần thực hiện và giọng điệu nên sử dụng.
# 2. User Prompt: Lời nhắc từ người dùng – đây là nội dung cuộc hội thoại mà mô hình sẽ phản hồi.

# design system prompt
system_prompt = f"""You are an assistant that analyzes the contents of a website 
and provides a short summary, ignoring text that might be navigation related. 
Respond in markdown.
"""


# Function to create the user prompt
def user_prompt_for(website):
    user_prompt = f"You are looking at a website titled {website.title}. "
    user_prompt += (
        "The contents of this website are as follows; "
        "please provide a short summary of this website in markdown. "
        "If it includes news or announcements, then summarize these too.\n\n"
    )
    user_prompt += website.text
    return user_prompt


# Function to create messages for the model
# A message contains 2 types of prompts: system and user
# The system prompt is the first message, and the user prompt is the second message
# Each prompt has a 'role' and 'content'
def messages_for(website):
    return [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt_for(website)},
    ]


# Function to summarize a URL
def summarize(url):
    try:
        website = Website(url)
        messages = messages_for(website)
        response = ollama.chat(model=MODEL, messages=messages)
        return response["message"]["content"]
    except Exception as e:
        return f"An error occurred: {e}"


# Run the app by streamlit: streamlit run text_summarize.py
# urls for testing: https://cnn.com, https://www.anthropic.com
# Streamlit app
st.title("Website Summary App")
st.markdown("Enter a URL to summarize the content of the website using the Ollama API.")

# Input URL
url = st.text_input("Enter a URL:", "")

if st.button("Summarize"):
    if url:
        with st.spinner("Summarizing..."):
            summary = summarize(url)
        st.markdown(summary)
    else:
        st.warning("Please enter a valid URL.")
