from smolagents import CodeAgent, DuckDuckGoSearchTool, HfApiModel, VisitWebpageTool

model = HfApiModel(model_id="facebook/opt-125m")

search_agent = CodeAgent(
    model=model,
    tools=[DuckDuckGoSearchTool()],
    name="search_agent",
    description="Search for information and calculate cargo travel time.",
)

manager_agent = CodeAgent(tools=[], model=model, managed_agents=[search_agent])
result = manager_agent.run("Who is the CEO of the Hugging Face?")
print(result)
