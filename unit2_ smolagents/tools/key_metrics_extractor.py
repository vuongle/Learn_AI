"""
Module for extracting key metrics and statistics from text.

This module provides functionality to extract percentages, dollar amounts,
and dates from text input using regular expressions.
"""

import re
from typing import Any, Dict

from smolagents import tool


@tool
def extract_key_metrics(text: str) -> Dict[str, Any]:
    """
    Extract key metrics and statistics from text.

    Args:
        text: The text to analyze

    Returns:
        Dictionary of extracted metrics
    """
    # Extract percentages
    percentage_pattern = r"(\d+(?:\.\d+)?)%"
    percentages = re.findall(percentage_pattern, text)

    # Extract dollar amounts
    dollar_pattern = r"\$(\d+(?:,\d+)*(?:\.\d+)?)(?: (?:million|billion|trillion))?"
    dollar_matches = re.findall(dollar_pattern, text)

    # Extract dates
    date_pattern = r"\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2}(?:st|nd|rd|th)?,?\s+\d{4}\b"
    dates = re.findall(date_pattern, text, re.IGNORECASE)

    metrics = {
        "percentages": [float(p) for p in percentages] if percentages else [],
        "dollar_amounts": (
            [m.replace(",", "") for m in dollar_matches] if dollar_matches else []
        ),
        "dates": dates if dates else [],
    }

    return metrics
