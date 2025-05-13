"""
This module shows an example of using ollama with smolagents.
"""

from smolagents import CodeAgent, DuckDuckGoSearchTool, LiteLLMModel, tool
from smolagents.agents import ToolCallingAgent

# Create a local model(llama3.2:3b) using LiteLLMModel from smolagents
# The prefix "ollama_chat" is specific to the LiteLLM library's naming convention for
# different model providers. LiteLLM is a unified interface that supports multiple
# LLM providers (like OpenAI, Anthropic, Ollama, etc.), and it uses these prefixes
# to identify which provider to use.
# For Ollama models, you need to use either:
# - ollama/: for basic completion
# - ollama_chat/: for chat completion (recommended for chat-based interactions)

# api_key:
# The "ollama" string is used by LiteLLM as an identifier to indicate that it should
# connect to a local Ollama instance
model = LiteLLMModel(model_id="ollama_chat/llama3.2:3b", api_key="ollama")

agent = CodeAgent(
    tools=[],
    model=model,
    add_base_tools=True,
    additional_authorized_imports=[
        "numpy",
        "sys",
        "wikipedia",
        "scipy",
        "requests",
        "bs4",
    ],
)
agent.run("solve the quadratic equation 2*x + 3x^2 = 0")
