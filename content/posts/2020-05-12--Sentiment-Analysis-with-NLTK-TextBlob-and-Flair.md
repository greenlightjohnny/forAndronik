---
title: Sentiment Analysis with NLTK, TextBlob and Flair
date: "2020-05-12"
template: "post"
draft: false
category: "Natural Language Processing"
tags:
  - "Natural Language Processing"
description: "If you have ever been curious about Sentiment Analysis or how a natural language processing (NLP) model can help you determine if a particular block of text has a positive, negative or neutral sentiment this guide will to get you started."
---

![inspiring-quote](/media/sentiment-analysis-with-nltk-text-blob-and-flair/inspiring-quote.png)

### Introduction
If you have ever been curious about Sentiment Analysis or how a natural language processing (NLP) model can help you determine if a particular block of text has a positive, negative or neutral sentiment this guide will to get you started. Before we processing lets talk about how you would go about running the following code examples. Google Collaborator provides notebooks that execute code on Google’s cloud service. Which I highly recommend for beginners. If you if have a Google account you can find it in your Drive. Otherwise, you can use a Conda environment and pip install modules on your local machine. In addition, I will be using seaborn for visualization.

```bash
pip install nltk
pip install textblob
pip install flair
```

The aim of the following article is to teach the reader three common methods to get you started with sentiment analysis. I will provide some code which you will be able to run in Colab or Conda environment. In addition, I will discuss how to interpret the sentiment metrics and do some visualization. This article is intended for those who are just beginning their journey into this fascinating topic and is in no way a deep dive. Finally, given that sentiment analysis is commonly used on tweet I’ve chosen a tweet that I particularly enjoy.

![peter-d](/media/sentiment-analysis-with-nltk-text-blob-and-flair/peter-d.png)

### NLTK

A popular way to begin extracting sentiment scores from text is NLTK Vader. Vader is a lexicon and rule based sentiment analysis tool specifically calibrated to sentiments most commonly expressed on social media platforms. When calculating a polarity score Vader outputs four metrics: compound, negative, neutral and positive. The compound score calculates the sum of all lexicon ratings which is normalized between -1 (most negative) and +1 (most positive). Positive, negative, and neutral represent the proportion of the text that fall into these categories.


```python
# import libraries
import pandas as pd
import seaborn as sns
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# import model
nltk.download('vader_lexicon')

# configure size of heatmap
sns.set(rc={'figure.figsize':(35,3)})

# function to visualize 
def visualize_sentiments(data):
  sns.heatmap(pd.DataFrame(data).set_index("Sentence").T,center=0, annot=True, cmap = "PiYG")

# text
sentence = "To inspire and guide entrepreneurs is where I get my joy of contribution"

# sentiment analysis
sid = SentimentIntensityAnalyzer()

# call method 
print(sid.polarity_scores(sentence))

# heatmap 
visualize_sentiments({
    "Sentence":["SENTENCE"] + sentence.split(),
    "Sentiment":[sid.polarity_scores(sentence)["compound"]] + [sid.polarity_scores(word)["compound"] for word in sentence.split()]
})


```

