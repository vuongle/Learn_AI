# This file is followed by this video: https://www.youtube.com/watch?v=UYEBMEAxIfA
# up to: 40:51
# repo: https://github.com/XamHans/smolagents-course
# -----------------------------------------------------------------------------

from smolagents import CodeAgent, DuckDuckGoSearchTool, HfApiModel, tool


@tool
def get_weather_data(city: str) -> dict:
    """
    Returns sample weather data for a given city

    Args:
        city: Name of the city (new york, london or toyko)

    """
    sample_data = {
        "new york": {
            "temps": [72, 75, 65, 68, 70, 74, 73],
            "rain": [0, 0.2, 0.5, 0, 0, 0.1, 0],
            "unit": "F",
        },
        "london": {
            "temps": [15, 14, 16, 13, 15, 17, 16],
            "rain": [0.5, 0.2, 0, 0.1, 0.3, 0, 0.2],
            "unit": "C",
        },
        "tokyo": {
            "temps": [22, 24, 23, 25, 26, 25, 22],
            "rain": [0, 0, 0.3, 0.2, 0, 0, 0.1],
            "unit": "C",
        },
    }

    city_lower = city.lower()
    return sample_data.get(city_lower, {"error": f"No data for {city}"})


# use Hugging Face Endpoint that also contains qwen2.5 coder
# same as: model_id="Qwen/Qwen2.5-Coder-32B-Instruct"
model = HfApiModel(
    model_id="https://pflgm2locj2t89co.us-east-1.aws.endpoints.huggingface.cloud"
)


agent = CodeAgent(
    tools=[get_weather_data],
    model=model,
    additional_authorized_imports=["matplotlib"],
    verbosity_level=2,
)

# Run the agent with a simple task
print("Running weather analysis agent...")
response = agent.run(
    """
    Get the weather data for Tokyo and:
    1. Calculate the average temperature
    2. Count rainy days
    3. Make a simple bar chart of daily temperatures
    4. Save the chart to 'tokyo_temps.png' (don't use plt.show())
    """
)
