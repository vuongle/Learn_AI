from langchain.prompts import ChatPromptTemplate
from langchain_ollama import ChatOllama

# Create model
model = ChatOllama(model="llama3.2:latest")

## PART 1: Create a ChatPromptTemplate using a template string
# template = "Tell me a joke about {topic}."
# prompt_template = ChatPromptTemplate.from_template(template)
# prompt = prompt_template.invoke({"topic": "cats"})
# result = model.invoke(prompt)
# print(result.content)


## PART 2: Create a Prompt template with Multiple Placeholders
# template_multiple = """You are a helpful assistant.
# Human: Tell me a {adjective} story about a {animal}.
# Assistant:"""
# prompt_multiple = ChatPromptTemplate.from_template(template_multiple)
# prompt = prompt_multiple.invoke({"adjective": "funny", "animal": "panda"})
# result = model.invoke(prompt)
# print(result.content)


## PART 3: Prompt with System and Human Messages (Using Tuples)
messages = [
    ("system", "You are a comedian who tells jokes about {topic}."),
    ("human", "Tell me {joke_count} jokes."),
]
prompt_template = ChatPromptTemplate.from_messages(messages)
prompt = prompt_template.invoke({"topic": "lawyers", "joke_count": 3})
result = model.invoke(prompt)
print(result.content)
