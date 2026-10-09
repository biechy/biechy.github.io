---
title: "Estimators"
sidebar_position: 2
---

:::info

We create estimators from sufficient statistics. These estimators have some good properties and sometimes we can even know if they are the best.

:::

:::definition[Statistic]
A **statistic** is a function $t$ of the sample $x$ which not depend directly of an unknown parameter $\theta$.
:::

:::definition[Estimator]
An **estimator of $\nu (\theta)$** is a r.v $T_n$ which is measurable and calculable on the sample $x$.
$$
    T_n=t(X):=\hat \nu
$$
:::

:::exercise[Exemple]
The estimator of the mean is the sample mean: $ \hat \mu = \frac{1}{n}\sum_i X_i := \bar X$
:::

:::note

An estimator is not only to estimate parameters of a law! It can be any function which is a statistic. But if it is the case, we denote $\hat \theta$ the estimator of the parameter $\theta$.

:::

:::definition[Sufficient]
A statistic is **sufficient** for $\theta$ when $\mathbb P_\theta (X|t(X)=t(x))$ not depend of $\theta$. That's mean that the statistic give all the information we need about $\theta$.
:::

:::exercise[Exemple]
Suppose $X_1, ..., X_n \sim Exp(\lambda)$:
    - $t(X_1, ..., X_n) = X_1$ is a statistic
    - $t(X_1, ..., X_n) = \sum_i X_i$ is a sufficient statistic
    - $\hat \lambda = n/{\sum_i X_i}=n/{t(X_1,...,X_n)}$ is an estimator of $\lambda$
:::

:::proposition[Proposition]
A statistic is **sufficient** for $\theta$ iff the density of the sample is factorisable like $f(x;\theta) = h(x)g(t(x);\theta)$
:::

:::definition[Biais]
The **bias** of an estimator is $b(\hat \nu)=\mathbb E(\hat \nu - \nu)=\mathbb E(\hat \nu) - \nu$

The estimator is unbiased when $b(\hat \nu)=0$
:::

:::definition[Variance]
The **variance** of an estimator is $var(\hat \nu)=\mathbb E((\hat \nu -E(\hat \nu))^2)$
:::

:::definition[Risk]
The **risk** of an estimator is $R(\hat \nu)=\mathbb E(\ell(\hat \nu,  \nu))$ with $\ell$ a loss function.
:::

:::exercise[Exemple]
The **Mean Squared Error (MSE)** is the risk with the loss function $\ell(\hat \nu,  \nu)=(\hat \nu - \nu)^2$
:::

:::note

For any minimization of the risk, you have a **bias-variance trade off** to deal with.

Proof for the MSE:

$$
\begin{align*}
    MSE(\hat \nu)
    &= \mathbb{E}((\hat \nu - \nu)^2) \\
    &= \mathbb{E}((\hat \nu - \mathbb{E}(\hat \nu) + \mathbb{E}(\hat \nu) - \nu)^2) \\
    &= \mathbb{E}((\hat \nu - \mathbb{E}(\hat \nu))^2 + (\mathbb{E}(\hat \nu) - \nu)^2 + 2(\hat \nu - \mathbb{E}(\hat \nu))(\mathbb{E}(\hat \nu) - \nu)) \\
    &= \mathbb{E}((\hat \nu - \mathbb{E}(\hat \nu))^2) + \mathbb{E}((\mathbb{E}(\hat \nu) - \nu)^2) + 2\mathbb{E}(\hat \nu - \mathbb{E}(\hat \nu))(\mathbb{E}(\hat \nu) - \nu) \\
    &= var(\hat \nu) + b(\hat \nu)^2 + 0
\end{align*}
$$

:::

## Asymptotic

:::definition[Consistency]
- $\hat \nu$ is **weakly consistent** when $\forall \theta \in \Theta, \forall \varepsilon > 0, \lim_{n \to \infty} \mathbb P_\theta(|\hat \nu - \nu|>\varepsilon) = 0$ denote $\hat \nu \xrightarrow{P} \nu$
- $\hat \nu$ is **strongly consistent (or almost sure)** when $\mathbb P_\theta(\lim_{n \to \infty}|\hat \nu - \nu|=0) = 1$ denote $\hat \nu \xrightarrow{a.s} \nu$
- $\hat \nu$ is **consistent in distribution** when $\forall f$ continue and bounded, $\lim_{n \to \infty} \mathbb E(f(\hat \nu))=\mathbb E(f(\nu))$ denote $\hat \nu \xrightarrow{d} \nu$
- $\hat \nu$ is **consistent in risk** when $\forall \theta \in \Theta, \lim_{n \to \infty}R(\hat \nu)=0$

For risks in the following forms: $\mathbb E(|\hat \nu- \nu|^r)$ with $r\in \mathbb N$, we denote $\hat \nu \xrightarrow{L^r} \nu$
:::

:::proposition[Proposition]
$\hat \nu \xrightarrow{L^r} \nu \Rightarrow \hat \nu \xrightarrow{P} \nu \Rightarrow \hat \nu \xrightarrow{d} \nu$ and $\hat \nu \xrightarrow{a.s} \nu \Rightarrow \hat \nu \xrightarrow{P} \nu$
:::

### Asymptotic laws

:::theorem[Law of large number]
If $X_1,..., X_n$ i.i.d with $\mathbb E(X_i) = \mu$. Then,
$$
    \frac{1}{n}\sum_i X_i \xrightarrow{P} \mu
$$
:::

:::theorem[Central Limit Theorem]
If $X_1,..., X_n$ i.i.d with $\mathbb E(X_i) = \mu$ and $var(X_i) = \sigma^2< \infty$. Then, 
$$
    \sqrt n (\bar X - \mu) \xrightarrow{d} \mathcal N(0, \sigma^2)
$$
:::

:::theorem[Delta Method]
If $X_1,..., X_n$ i.i.d with $\mathbb E(X_i) = \mu$, $var(X_i) = \sigma^2< \infty$ and $h$ a function differentiable in $\theta$. Then, 
$$
    \sqrt n (h(\hat \theta) - h(\theta)) \xrightarrow{d} \mathcal N(0, \sigma^2 h'(\theta)^2)
$$
:::

:::theorem[General Delta Method]
If $u_n(X_n-X)\xrightarrow{d}Z$ with $u_n \rightarrow +\infty$ and $h$ function differentiable in $X$. Then, 
$$
    u_n (h(X_n) - h(X)) \xrightarrow{d} \mathcal Dh(X).Z
$$
:::

## Methods for creating estimators

### Method of Moments

:::definition[Moment]
The **moment k** of $X$ is $m_k:=\mathbb E(X^k)$
:::

:::definition[Empirical Moment]
We deduce the **empirical moment k** of $X$ with is $\hat m_k=\frac{1}{n}\sum_i X_i^k$
:::

:::tips[Plugin Method]
The aim is to describe the parameter $\theta$ with the moments of $X$ and then **plugin** the empirical moment to get $\hat \theta_{MM}$.

1. Describe the parameters $\theta$ with the moments $m_k$. You may have a system if $dim(\theta) > 1$.
2. Resolve the system for $\theta$.
3. Plugin the $\hat m_k$ to get $\hat \theta_{MM}$.
:::

::::tabs
:::exercise[Exemple 1]
Let's find the parameters $\theta=(\mu, \sigma^2)$ of $\mathcal N(\mu, \sigma^2)$.

1. $\mu = \mathbb E(X) = m_1$ and $\sigma^2 = var(X) = \mathbb E(X^2) - (\mathbb E(X))^2=m_2-m_1^2$
2. Already resolve
3. $\hat \mu = \hat m_1= \frac{1}{n}\sum_i X_i$ and $\hat \sigma^2=\hat m_2 - \hat m_1^2 = \frac{1}{n}\sum_i X_i^2 - (\frac{1}{n}\sum_i X_i)^2$
:::

:::exercise[Exemple 2]
Let's find the parameter $\theta=\lambda$ of $\mathcal Exp(\lambda)$.

1. $\mathbb E(X) = m_1 = \frac{1}{\lambda}$
2. $\lambda = \frac{1}{m_1}$
3. $\hat \lambda = \frac{1}{\hat m_1} =\frac{n}{\sum_i X_i}$
:::
::::

:::note

For complex variable, it is often we can't compute the moments. We can try to do it numerically.

:::

### Maximum Likelihood Estimation

:::definition[Maximum likelihood estimation (MLE)]
The Maximum likelihood estimation is the estimator given by
$$ 
\hat \theta_{MLE}:=\arg\max_{\theta \in \Theta}L(\theta;x)=\arg\max_{\theta \in \Theta}\ell_\theta
$$
:::

:::tips[Method]
The method is the classic method to find a maximum:

1. Compute the gradient $\nabla \ell_\theta$.
2. Find all critical points by resolving $\nabla \ell_\theta=0$.
3. Find all the extrema by checking if $\nabla^2 \ell_\theta<0$ on the critical point.
4. Choose one extrema as $\hat \theta$.
:::

:::note

Be careful because in real life, the likelihood has a lot of local extrema!
Moreover, if the model is not regular, the method have to be modify.

:::

:::exercise[Exemple]
Let's estimate the parameters $\theta$ of $\mathcal B(\theta)$

1. $
\ell_\theta=\sum_i X_i \log(\theta) + \sum_i (1-X_i) \log(1-\theta)
\Rightarrow
\nabla \ell_\theta=\frac{\sum_i X_i}{\theta} - \frac{n -\sum_i X_i}{1-\theta}
$
2. $
\nabla \ell_\theta=0
\Rightarrow \frac{\sum_i X_i}{\theta} = \frac{n -\sum_i X_i}{1-\theta}
\Rightarrow \theta = \frac{1}{n}\sum_i X_i
\Rightarrow \hat \theta_{MLE} = \frac{1}{n}\sum_i X_i
$
3. Checking: $\nabla^2 \ell_\theta=-\frac{\sum_i X_i}{\theta^2} - \frac{n -\sum_i X_i}{(1-\theta)^2}<0$ OK!
:::

:::note

For complex variable, it is often we can't compute the likelihood. We can try to do it numerically but we have to try best to not fall into local extrema.

:::

:::proposition[Proposition]
If $t$ is a sufficient statistic for $\theta$, then $\hat \theta_{MLE}$ is a function a $t$.
:::

:::note

But $\hat \theta_{MLE}$ don't have to be sufficient.

:::

:::theorem[Theorem]
$h(\hat \theta_{MLE})$ is the MLE of $h(\theta)$.
:::

:::proposition[Proposition]
Suppose:
- $H_1$: model identifiable
- $H_2$: $\Theta$ compact and $f(\theta;x) \in \mathcal C^0, \forall x \in \mathcal X$
- $H_3$: $\forall \theta \in \Theta, h(x):=\sup_{\theta \in \Theta} |\log f_\theta(x)| \in L_1(\mathbb P_\theta)$

Then,
$\hat \theta_{MLE}$ is strongly consistent
:::

:::theorem[Theorem]
If $\hat \theta_{MLE}$ is consistent, the model is regular and $I_1(\theta):= - \mathbb E_\theta(\nabla^2 \log f_\theta(X_1))$ is invertible.

Then,

$$
    \sqrt{n}(\hat \theta_{MLE} - \theta) \xrightarrow{d} \mathcal N(0, I_1(\theta)^{-1})
$$

So with the delta method,

$$
    \sqrt{n}(h(\hat \theta_{MLE}) - h(\theta)) \xrightarrow{d} \mathcal N(0, I_1(\theta)^{-1}h'(\theta)^2)
$$
:::

:::note

If you want to know where the $I_1(\theta)$ come from, check the [Fisher Information](#with-the-fisher-information)

:::

### Other methods

There are a lot of different methods, I give you an non-exhaustive list:

- [M-estimator](https://en.wikipedia.org/wiki/M-estimator)
- [Estimating Equation](https://en.wikipedia.org/wiki/Estimating_equations)
- [Empirical Likelihood](https://lmv.math.cnrs.fr/wp-content/uploads/2013/06/pdf_presentationel.pdf) is a unparametric framework
- [Bayes Estimation](http://web.univ-ubs.fr/lmba/gouno/BAYES/COURS/Cours2.pdf) (see [Appendix](/knowledge/machine-learning/statistical-modeling/appendix#bayes) for more information about the Bayes framework)
- [Maximum a posteriori estimation](https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation)

You can find others in the [Estimation Theory](https://en.wikipedia.org/wiki/Estimation_theory) wiki page.

## What is a good estimator?

### In general

There is no uniform way to say "I have the best estimator". Most of the time that depend of what you are looking for. Sometimes you can't accept bias, sometimes you need to have a strong consistency and sometimes you just want to minimize you risk.

But you know that mathematicians don't like the answer the answer "that's depend". So they create a function that define a characteristic of the model: the Fisher Information. Sometime it can help to find the best estimator !

### With the Fisher Information

:::definition[Score]
The **score** is the vector $\nabla \ell_\theta$
:::

:::proposition[Proposition]
The score is centered, i.e $\mathbb E(\nabla \ell_\theta) = 0$
:::

:::proposition[Proposition]
For a regular model, the score is additive, i.e $\nabla\ell_\theta(X,Y) = \nabla\ell_\theta(X) + \nabla\ell_\theta(Y)$
:::

:::definition[Fisher Information]
The **Fisher Information** the variance matrix of this score:
$$
    I(\theta) = var(\nabla \ell_\theta) = E((\nabla \ell_\theta - E(\nabla \ell_\theta))^2) = E(\nabla \ell_\theta^2) = E(\nabla \ell_\theta \nabla \ell_\theta^\top)
$$
:::

:::note

Fisher's information is related to the precision with which the parameter is estimated.

:::

:::note

If the model is i.i.d, we denote $I_n(\theta)$ the Fisher Information.

:::

:::proposition[Proposition]
Each sample give the same information, i.e $I_n(\theta) = nI_1(\theta)$
:::

:::proposition[Proposition]
For any statistic $t$, $I_t(\theta) \leq I_n(\theta)$
:::

:::proposition[Proposition]
If the model is regular, then the Fisher Information is symmetrical, positive semi-definite and
$$
    I_n(\theta) = - \mathbb E (\nabla^2 \ell_\theta(X))
$$
:::

:::theorem[Fréchet-Darmois-Cramér-Rao Bound]
If the model is regular and $I_n(\theta)$ is invertible.

Then,

$$
    \forall T_n \text{estimator unbiased of } \theta \text{ s.t } \mathbb E(|T_n|)<\infty, var(T_n) \geq I_n(\theta)^{-1}
$$

And with $h$ a function,

$$
    \forall T_n \text{estimator unbiased of } h(\theta) \text{ s.t } \mathbb E(|T_n|)<\infty, var(T_n) \geq Dh(\theta)I_n(\theta)^{-1}Dh(\theta)^\top
$$

And,

$$
    \forall T_n \text{estimator biased of } h(\theta) \text{ s.t } \mathbb E(|T_n|)<\infty, var(T_n) \geq (Dh(\theta)+Db(\theta))I_n(\theta)^{-1}(Dh(\theta)+Db(\theta))^\top
$$

The lower bound is the **Cramer-Rao bound** !
:::

:::definition[Efficiency]
An estimator $T_n$ **unbiased** is **efficient** when $var(T_n)$ touch the Cramer-Rao bound.
:::

:::theorem[Theorem]
$T_n$ is efficient iff the family of law is an exponential family (i.e $f(x; \theta)=\exp (a(x)\alpha(\theta) + \beta(\theta) + c(x))$) or $T_n$ following the form $A\sum a(X_i) + B$ with $h(\theta) = \mathbb E_\theta(T_n)$
:::

The efficiency is the way to say "my estimator is the best" (among the unbiased) !

:::note

You can proof that your sufficient statistic is the best among the best (i.e total, complete, etc) with some properties (Lehman-Scheffé, etc.) but to be honest I never used it in practice so I skip it 😅

:::
