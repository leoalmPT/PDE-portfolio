Me and my colleagues, Pedro Rodrigues and Diogo Magalhães, developed the paper "AIDetx: Detecting Machine-Generated Text through Data Compression Techniques," which was submitted for DCC 2024.

<br>

This paper introduces AIDetx, a novel method for detecting machine-generated text using data compression techniques. Unlike traditional approaches, which often involve deep learning classifiers with high computational costs and limited interpretability, AIDetx employs a compression-based classification framework leveraging finite-context models (FCMs). By constructing distinct compression models for human-written and AI-generated text, AIDetx classifies new inputs based on the model that achieves a higher compression ratio.

<br>

Our evaluation on two benchmark datasets achieved F1 scores exceeding 97% and 99%, respectively, demonstrating high accuracy. AIDetx provides a more interpretable and computationally efficient solution compared to current methods, significantly reducing training time and hardware requirements, as it does not necessitate GPU usage.

<br>

[Github Repository](https://github.com/AIDetx/AIDetx)