# Use a pipeline as a high-level helper
from transformers import pipeline

pipe = pipeline("translation", model="VietAI/envit5-translation")
result = pipe("Xin chào, tên bạn là gì?")
