from langchain_core.tools import Tool
from langchain import hub
from langchain_ollama import ChatOllama
from langchain.agents import (
    AgentExecutor,
    create_react_agent,
)
from langchain.prompts import ChatPromptTemplate


# Define a very simple tool function that returns the current time
def get_current_time(*args, **kwargs):
    """Returns the current time in H:MM AM/PM format."""
    import datetime  # Import datetime module to get current time

    now = datetime.datetime.now()  # Get current time
    return now.strftime("%I:%M %p")  # Format time in H:MM AM/PM format


# List of tools available to the agent
tools = [
    Tool(
        name="Time",  # Name of the tool
        func=get_current_time,  # Function that the tool will execute
        # Description of the tool
        description="Useful for when you need to know the current time",
    ),
]

# Pull the prompt template from the hub
# ReAct = Reason and Action
# https://smith.langchain.com/hub/hwchase17/react
# prompt = hub.pull("khodak/react-agent-template")
# instructions = """You are an assistant."""
# base_prompt = hub.pull("khodak/react-agent-template")
# prompt = base_prompt.partial(instructions=instructions)

# Create a custom prompt template instead of using the hub
prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """You are an agent that has access to the following tools:

{tools}

Use the following format:

Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question

IMPORTANT: When you receive an Observation, you MUST use the EXACT value in your Final Answer, not a placeholder like [Observation].

Begin!""",
        ),
        ("human", "{input}"),
        ("ai", "{agent_scratchpad}"),
    ]
)

# Create a ChatOllama model
llm = ChatOllama(model="mistral:latest", temperature=0)

# Create the ReAct agent using the create_react_agent function
agent = create_react_agent(
    llm=llm,
    tools=tools,
    prompt=prompt,
    # stop_sequence=True,
)

# Create an agent executor from the agent and tools
agent_executor = AgentExecutor.from_agent_and_tools(
    agent=agent,
    tools=tools,
    verbose=True,
    handle_parsing_errors=True,
    max_iterations=5,
)

# Run the agent with a test query
response = agent_executor.invoke({"input": "What time is it?"})

# Print the response from the agent
print("response:", response)
