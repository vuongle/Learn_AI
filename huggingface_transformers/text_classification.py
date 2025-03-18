"""
Text classification using Hugging Face Transformers library.
This module performs sentiment analysis on text using a pre-trained model.
"""

from transformers import pipeline

"""
What are Pipelines in Transformers?
They provide an easy-to-use API through pipeline() method for performing inference over a variety of tasks.
They are used to encapsulate the overall process of every Natural Language Processing task, such as text cleaning, tokenization, embedding, etc.
The pipeline() method has the following structure: 

# To use a default model & tokenizer for a given task(e.g. question-answering)
pipeline("<task-name>")

# To use an existing model
pipeline("<task-name>", model="<model_name>")

# To use a custom model/tokenizer
pipeline('<task-name>', model='<model name>',tokenizer='<tokenizer_name>')
"""

classifier = pipeline(
    "sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english"
)
result = classifier("this is the worst movie ever")
print(result)
