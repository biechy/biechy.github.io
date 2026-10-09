---
title: "Introduction"
sidebar_position: 1
---

:::definition[Feature Space]
The **feature space** $\mathcal X$. Usually $\mathcal X=\mathbb R^d$ but you can also have qualitative variable.
:::

:::definition[Target Space]
The **target space** $\mathcal Y$. It can be ever compact $\mathbb R$ or countable $\mathbb N$.
:::

:::definition[Dataset]
A **dataset** is a couple $\mathcal D_n:=(X_i, Y_i)$ where $X_i, Y_i$ r.v from $\mathcal X,\mathcal Y$
:::

:::note

You can split a dataset in a train and a test dataset or a train, a validation and a test dataset.

:::

:::definition[Hypothesis class]
The **hypothesis class** is the set $\mathcal H = \{h : \mathcal X \rightarrow \mathcal Y; h \text{ measurable }\}$ with $h$ a **predictor**.
:::

:::definition[Learning rule]
A learning rule is a mapping from training data to hypotheses in a given hypothesis class, i.e $\hat h : \mathcal D_n \rightarrow \mathcal H$
:::

:::note

By habit, we will not note the conditioning to the dataset of the learning rule: $\hat h (\mathcal D_n)(x):=\hat h (x)$

:::

:::definition[Loss function]
A **loss function** is $\ell : \mathcal Y \times \mathcal Y \rightarrow \mathbb R^+$
:::

:::definition[Risk]
The **risk** of a predictor is $R(\hat h) = \mathbb E(\ell(\hat h(X), Y) )$
:::

:::note

Depending the dataset that you use (i.e train, validation, test) you can have different type of risk. The most important is the generalization one with the test dataset.

:::

:::proposition[Empirical risk]
Most of time, we don't know the law of the data so we need to estimate $R(\hat h|\mathcal D_n)$ with $\hat{\mathcal R}(\hat h)=\frac{1}{n}\sum_i\ell(\hat h(x_i),y_i)$
:::

:::note

You can also estimate $R(\hat h)$ via cross validation, bootstrap, etc.

:::

:::definition[Bayes Risk]
The **bayes risk** is the best possible risk from the hypothesis class, i.e $\mathcal R^* = \inf_{h \in \mathcal H}\mathbb E(\ell(h(X), Y) )$
:::

:::definition[Excess risk]
The **excess risk** is $R(h)-R^*$
:::

:::proposition[Decomposition of the Empirical Risk]
$R(\hat h)-R^*=\inf_{h \in \mathcal H}R^*-R(h) + \left( (R(\hat h)-R^*)- (\inf_{h \in \mathcal H}R(h) -R^*) \right)$
:::

:::note

That is the approximation/estimation error (same than bias/variance)

:::
