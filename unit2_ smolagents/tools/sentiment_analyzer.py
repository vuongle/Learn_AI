"""
A module for sentiment analysis of text using a simple rule-based approach.

This module provides functionality to analyze text sentiment based on counting
positive and negative words, returning both a numerical score and sentiment label.
"""

from typing import Any, Dict

from smolagents import tool


#  Analysis tools
@tool
def analyze_sentiment(text: str) -> Dict[str, Any]:
    """
    Analyze the sentiment of a given text.

    Args:
        text: The text to analyze

    Returns:
        Dictionary containing sentiment score and label
    """
    # Simple rule-based sentiment analysis
    positive_words = [
        "growth",
        "increase",
        "profit",
        "success",
        "positive",
        "innovative",
        "improvement",
        "opportunity",
        "beneficial",
        "advantage",
    ]
    negative_words = [
        "decline",
        "decrease",
        "loss",
        "failure",
        "negative",
        "downturn",
        "challenging",
        "problem",
        "risk",
        "threat",
    ]

    text_lower = text.lower()

    positive_count = sum(1 for word in positive_words if word in text_lower)
    negative_count = sum(1 for word in negative_words if word in text_lower)

    score = (positive_count - negative_count) / max(1, positive_count + negative_count)

    if score > 0.2:
        label = "positive"
    elif score < -0.2:
        label = "negative"
    else:
        label = "neutral"

    return {
        "score": score,
        "label": label,
        "positive_count": positive_count,
        "negative_count": negative_count,
    }
