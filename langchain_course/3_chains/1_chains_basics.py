from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
from langchain_ollama import ChatOllama

# Create a ChatOpenAI model
model = ChatOllama(model="llama3.2:3b")

# Create a ChatPromptTemplate using a template string
prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a comedian who tells jokes about {topic}."),
        ("human", "Tell me {joke_count} jokes."),
    ]
)

# Create the combined chain using LangChain Expression Language (LCEL)
# chain = prompt_template | model
chain = prompt_template | model | StrOutputParser()

# Invoke the chain (instead of invoking the prompt then invoking model)
result = chain.invoke({"topic": "lawyers", "joke_count": 3})
print(result)
