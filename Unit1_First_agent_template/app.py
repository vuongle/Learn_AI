from smolagents import CodeAgent, DuckDuckGoSearchTool, HfApiModel, load_tool, tool
import datetime
import requests
import pytz
import yaml
from tools.final_answer import FinalAnswerTool

from Gradio_UI import GradioUI


# Below is an example of a tool that does nothing. Amaze us with your creativity !
@tool
def my_custom_tool(
    arg1: str, arg2: int
) -> str:  # it's import to specify the return type
    # Keep this format for the description / args / args description but feel free to modify the tool
    """A tool that does nothing yet
    Args:
        arg1: the first argument
        arg2: the second argument
    """
    return "What magic will you build ?"


@tool
def get_current_time_in_timezone(timezone: str) -> str:
    """A tool that fetches the current local time in a specified timezone.
    Args:
        timezone: A string representing a valid timezone (e.g., 'America/New_York').
    """

    try:
        # Create timezone object
        tz = pytz.timezone(timezone)
        # Get current time in that timezone
        local_time = datetime.datetime.now(tz).strftime("%Y-%m-%d %H:%M:%S")
        return f"The current local time in {timezone} is: {local_time}"
    except Exception as e:
        return f"Error fetching time for timezone '{timezone}': {str(e)}"


@tool
def get_vietnam_gold_price(provider: str) -> str:
    """Searches for current gold price from a specific Vietnamese provider.
    Args:
        provider: Gold provider name (e.g., 'SJC', 'PNJ', 'DOJI')
    """
    search_tool = DuckDuckGoSearchTool()
    provider = provider.upper()
    if provider not in ["SJC", "PNJ", "DOJI"]:
        return "Please specify a valid provider: SJC, PNJ, or DOJI"
    search_query = f"giá vàng {provider} hôm nay"
    search_result = search_tool(search_query)
    return f"Search results for {provider} gold price: {search_result}"


final_answer = FinalAnswerTool()

# If the agent does not answer, the model is overloaded, please use another model or the following Hugging Face Endpoint that also contains qwen2.5 coder:
# model_id='https://pflgm2locj2t89co.us-east-1.aws.endpoints.huggingface.cloud'

model = HfApiModel(
    max_tokens=2096,
    temperature=0.5,
    # model_id='Qwen/Qwen2.5-Coder-32B-Instruct',# it is possible that this model may be overloaded
    model_id="https://pflgm2locj2t89co.us-east-1.aws.endpoints.huggingface.cloud",
    custom_role_conversions=None,
)


# Import tool from Hub
image_generation_tool = load_tool("agents-course/text-to-image", trust_remote_code=True)

with open("prompts.yaml", "r") as stream:
    prompt_templates = yaml.safe_load(stream)

agent = CodeAgent(
    model=model,
    tools=[
        final_answer,
        get_current_time_in_timezone,
        get_vietnam_gold_price,
    ],  ## add your tools here (don't remove final answer)
    max_steps=6,
    verbosity_level=1,
    grammar=None,
    planning_interval=None,
    name=None,
    description=None,
    prompt_templates=prompt_templates,
)


GradioUI(agent).launch()
