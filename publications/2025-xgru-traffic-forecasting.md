---
title: "A Lightweight Recurrent Architecture for Robust Urban Traffic Forecasting With Missing Data"
date: 2025-09-01
authors: ["Chung-I Huang", "Lucas Biéchy", "Jih-Sheng Chang", "Chien-Hao Tseng", "Jyh-Horng Wu", "Wen-Yi Chang", "Yun-Te Lin"]
venue: "IEEE Open Journal of Intelligent Transportation Systems"
status: "published"
link: "https://ieeexplore.ieee.org/document/11162586"
theme: "other"
tldr: "xGRU, a recurrent model with exponential gating inspired by xLSTM, matches Transformer forecasters with far fewer parameters."
---

Real-time traffic flow prediction plays a vital role in alleviating urban congestion and improving transportation efficiency. However, urban traffic data are often subject to sensor anomalies, missing values, and unstable model performance. To address these challenges, this paper proposes a lightweight and robust recurrent neural network architecture designed to enhance the accuracy and reliability of traffic flow forecasting under data incompleteness. We introduce two enhanced recurrent models—Extended Long Short-Term Memory (xLSTM) and Extended Gated Recurrent Unit (xGRU)—which incorporate exponential gating mechanisms and matrix-valued memory updates. These enhancements significantly reduce model complexity and training overhead while preserving high prediction accuracy. Furthermore, a three-tier imputation strategy is proposed to handle missing data, adaptively applying linear interpolation, temporal averaging, or seasonal decomposition based on the length and characteristics of the missing intervals. Extensive experiments were conducted on a six-month multivariate traffic sensor dataset collected from Taichung City, Taiwan. The results demonstrate that xGRU achieves comparable or superior forecasting accuracy to mainstream Transformer-based models, such as Informer, Autoformer, and TFT, despite using significantly fewer parameters. These findings highlight the proposed architecture’s practical potential for real-world urban traffic forecasting with enhanced efficiency, robustness, and data resilience.
