from llama_index.llms.huggingface_api import HuggingFaceInferenceAPI
from llama_index.core.agent.workflow import AgentWorkflow
from llama_index.core.tools import FunctionTool


# define sample Tool -- type annotations, function names, and docstrings, are all included in parsed schemas!
def multiply(a: int, b: int) -> int:
    """Multiplies two integers and returns the resulting integer"""
    return a * b


# initialize llm
llm = HuggingFaceInferenceAPI(
    model_name="https://pflgm2locj2t89co.us-east-1.aws.endpoints.huggingface.cloud"
)

# initialize agent
agent = AgentWorkflow.from_tools_or_functions(
    [FunctionTool.from_defaults(multiply)], llm=llm
)
response = agent.run("What is 2 times 2?")
