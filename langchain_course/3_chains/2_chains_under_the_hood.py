from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnableLambda, RunnableSequence
from langchain_ollama import ChatOllama

# Create a model
model = ChatOllama(model="llama3.2:3b")

# Create a ChatPromptTemplate using a template string
prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a comedian who tells jokes about {topic}."),
        ("human", "Tell me {joke_count} jokes."),
    ]
)

# Create individual runnables (steps in the chain). RunnableLambda: is considered as a task
format_prompt = RunnableLambda(lambda x: prompt_template.format_prompt(**x))
invoke_model = RunnableLambda(lambda x: model.invoke(x.to_messages()))
parse_output = RunnableLambda(lambda x: x.content)

# Create the RunnableSequence (equivalent to the LCEL chain)
chain = RunnableSequence(first=format_prompt, middle=[invoke_model], last=parse_output)

# ===> 4 above lines of code is equivalent to this line of code: chain = prompt_template | model | StrOutputParser()

# Invoke the chain (instead of invoking the prompt then invoking model)
result = chain.invoke({"topic": "lawyers", "joke_count": 3})
print(result)
