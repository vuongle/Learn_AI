# Prompt templates help to translate user input and parameters into instructions for a language model. This can be used to
# guide a model's response, helping it understand the context and generate relevant and coherent language-based output.
# Prompt Templates take as input a dictionary, where each key represents a variable in the prompt template to fill in.
# Prompt Templates output a PromptValue. This PromptValue can be passed to an LLM or a ChatModel, and can also be cast to
# a string or a list of messages. The reason this PromptValue exists is to make it easy to switch between strings and messages.
from langchain.prompts import PromptTemplate, ChatPromptTemplate

## PART 1: Create a PromptTemplate/ChatPromptTemplate using a template string
# template = "Tell me a joke about {topic}."
# example 1: return prompt output as a string
# prompt_template = PromptTemplate.from_template(template)
# prompt = prompt_template.invoke({"topic": "cats"})
# print(prompt)

# example 1: return prompt output as a HumanMessage
# prompt_template = ChatPromptTemplate.from_template(template)
# prompt = prompt_template.invoke({"topic": "cats"})
# print(prompt)
# print(prompt.messages[0].content)

## PART 2: Create a Prompt template with Multiple Placeholders
# template_multiple = """You are a helpful assistant.
# Human: Tell me a {adjective} story about a {animal}.
# Assistant:"""
# prompt_multiple = ChatPromptTemplate.from_template(template_multiple)
# prompt = prompt_multiple.invoke({"adjective": "funny", "animal": "panda"})
# print(prompt)

## PART 3: Prompt with System and Human Messages (Using Tuples)
messages = [
    ("system", "You are a comedian who tells jokes about {topic}."),
    ("human", "Tell me {joke_count} jokes."),
]
prompt_template = ChatPromptTemplate.from_messages(messages)
prompt = prompt_template.invoke({"topic": "lawyers", "joke_count": 3})
print(prompt)
