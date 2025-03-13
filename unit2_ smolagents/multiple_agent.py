import os
from dotenv import load_dotenv
from huggingface_hub import login
from PIL import Image
from smolagents import CodeAgent, DuckDuckGoSearchTool, HfApiModel, VisitWebpageTool
from tools.time_calculator import calculate_cargo_travel_time

load_dotenv()

login(token=os.getenv("HUGGING_FACE_TOKEN"))


model = HfApiModel(model_id="Qwen/Qwen2.5-Coder-32B-Instruct")

task = """Find all Batman filming locations in the world, calculate the time to transfer via cargo plane to here (we're in Gotham, 40.7128° N, 74.0060° W), and return them to me as a pandas dataframe.
Also give me some supercar factories with the same cargo plane transfer time."""

search_agent = CodeAgent(
    model=model,
    tools=[DuckDuckGoSearchTool(), VisitWebpageTool(), calculate_cargo_travel_time],
    additional_authorized_imports=["pandas"],
    max_steps=20,
    name="search_agent",
    description="Search for information and calculate cargo travel time.",
)

manager_agent = CodeAgent(tools=[], model=model, managed_agents=[search_agent])
result = manager_agent.run(task)
print(result)
