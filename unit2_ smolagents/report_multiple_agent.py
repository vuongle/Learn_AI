# This file is followed by this video: https://www.youtube.com/watch?v=UYEBMEAxIfA
# repo: https://github.com/XamHans/smolagents-course
# -----------------------------------------------------------------------------

"""
This module implements a multi-agent system for market research and analysis.
It creates and manages three specialized agents:
1. Web Search Agent - for retrieving market information
2. Analysis Agent - for processing information
3. Manager Agent - for orchestrating the entire process
"""

import os

from dotenv import load_dotenv
from smolagents import (
    CodeAgent,
    DuckDuckGoSearchTool,
    OpenAIServerModel,
    ToolCallingAgent,
)

from tools.key_metrics_extractor import extract_key_metrics
from tools.sentiment_analyzer import analyze_sentiment
from tools.visit_webpage import VisitWebpageTool

load_dotenv()

# Initialize the OpenAI models
web_model = OpenAIServerModel(
    model_id="gpt-4o-mini-2024-07-18",
    api_base="https://api.openai.com/v1",
    api_key=os.getenv("OPENAI_API_KEY"),
)

reasoning_model = OpenAIServerModel(
    model_id="gpt-4o-mini-2024-07-18",
    api_base="https://api.openai.com/v1",
    api_key=os.getenv("OPENAI_API_KEY"),
)

# Create specialized agents
# 1. Web Search Agent - for retrieving market information
web_agent = ToolCallingAgent(
    tools=[DuckDuckGoSearchTool(), VisitWebpageTool()],
    model=web_model,
    max_steps=8,
    name="web_search_agent",
    description="Searches the web for recent market data and news about specific industries.",
)

# 2. Analysis Agent - for processing information
analysis_agent = ToolCallingAgent(
    tools=[analyze_sentiment, extract_key_metrics],
    model=reasoning_model,
    max_steps=5,
    name="analysis_agent",
    description="Analyzes market data to extract sentiment and key metrics",
)

# 3. Manager Agent - orchestrates the entire process
manager_agent = CodeAgent(
    model=reasoning_model,
    tools=[],
    managed_agents=[web_agent, analysis_agent],
    additional_authorized_imports=["pandas", "matplotlib.pyplot"],
    name="market_research_manager",
    description="Manages the market research workflow and compiles the final report",
    planning_interval=2,
    max_steps=12,
    verbosity_level=2,
)


# Display the agent hierarchy
def visualize_agent_system():
    """
    Visualizes the hierarchical structure of the agent system using the manager agent's
    built-in visualization method.

    This function displays a graphical representation of how different agents
    (web search agent, analysis agent) are organized under the manager agent.
    """
    manager_agent.visualize()


visualize_agent_system()


# Example usage function
def run_market_research(industry: str):
    """
    Generate a market research report for a specific industry.

    Args:
        industry: The industry to research

    Returns:
        A market research report with insights and analysis
    """
    prompt = f"""
    You are a market research assistant. Your task is to research recent trends in the {industry} industry
    and prepare a concise market report. Follow these steps:
    
     Compile everything into a final report with:
       - Executive summary (2-3 paragraphs)
       - Key trends (bullet points)
       - Market sentiment analysis (include both positive and negative perspectives)
       - Important statistics and metrics
       - Conclusion with outlook
    
    The report should be concise but comprehensive, focusing on actionable insights. Also include sources at the end of report from where you got the data.
    """

    result = manager_agent.run(prompt)
    return result


# Currently, can not run because openai's account is free -> can not use above models
run_market_research("Technology")
