---
title: "Tests and Confidence Intervals"
sidebar_position: 3
---

:::info

Test or Confidence Interval is a way to estimate the error we do in our estimation because of the lack of data.

:::

## Tests

Tests are the backbone spine of statistical modeling. You can ever confirm or deny the totality of your work in a second with it. But to be transparent, tests are still quite fuzzy for me. So I will explain what I understood:

In order to choose between an hypothetical model $H_0$ named the null hypothesis and an other model $H_1$ named alternative hypothesis, you can apply a methodological framework: a test. For that, you can use either a method with a quantile or with a p-value.

:::tips[Test with quantile]
1. Define a **statistical model**:
$$
\mathcal M := ( \mathcal X, \mathcal A, \{ \mathbb P_{\theta} \}_{\theta \in \Theta} )

$$

2. Define:
- **Null hypothesis** $H_0$: $\theta \in \Theta_0 \subset \Theta$
- **Alternative hypothesis** $H_1$: $\theta \in \Theta_1 \subset \Theta$

3. Create a **statistic** $t(X)$ that helps distinguish between $H_0$ and $H_1$. Under $H_0$, the distribution of $t(X)$ is denoted by $L$ (i.e., the law of $t(X)$ under $\mathbb P_{\theta_0}$).

4. Fix a significance level $\alpha \in (0,1)$ (e.g., $\alpha = 0.05$) and use the **quantile of order $1 - \alpha$** of the distribution $L$, denoted by $q_{1-\alpha}^L$ and defined by: $\mathbb P_{\theta_0}(t(X) \leq q_{1-\alpha}^L) = 1 - \alpha$. This means that, under $H_0$, the probability that $t(X)$ exceeds $q_{1 - \alpha}^L$ is exactly $\alpha$
> (Note: For a **one-sided** test with large values of $t(X)$ as evidence against $H_0$; adjust accordingly for two-sided or left-tailed tests.)

5. Compute the observed value $t(x)$ of the test statistic from the data:
- If $t(x) \geq q^L_{1-\alpha}$, we are in a rare event under $H_0$ ⇒ **reject $H_0$**.
- Otherwise, we **do not reject $H_0$**.
:::

::::tabs
:::exercise[Exercise]
Give the statistical test of level 10\% to check if the normal law $\mathcal N(\theta, 2)$ is center in 2 or not. You have two samples equal to $x=(3.7, 3.9)$.
:::

:::tips[Tips]
$\alpha = 0.10$ and you have a test of each side:
$H_0$: $\mu=2$ and $H_1$:$\mu\neq2=\mu>2$ and $\mu<2$
:::

:::proof[Result]
1. $\mathcal M = ( \mathbb R, \mathcal B(\mathbb R), \mathcal N(\theta, 2)_{\theta \in \Theta} )$
2. $H_0$: $\mu=2$ and $H_1$:$\mu\neq2=\mu>2$ and $\mu<2$
3. $t(X) = \bar X = (X_1+X_2)/2$
4. $\mathbb P_{\theta_0}(|\sqrt{2}\frac{t(X) - \mu}{\sqrt{2}}| \leq q_{1-\alpha}^{\mathcal N(0, 1)})$ with the TCL so equal to $\mathbb P_{\theta_0}(q_{\alpha/2}^{\mathcal N(0, 1)}+2 \leq t(X) \leq q_{1-\alpha/2}^{\mathcal N(0, 1)}+2) = 1 - \alpha = \mathbb P_{\theta_0}(1.64 \leq t(X) \leq 3.64)$
5. We reject if $t(x) \notin (1.64, 3.64)$ and $t(x) = 3.8$ so we reject !
:::
::::

:::tips[Test with p-value]
1. Define a **statistical model**:
$$

\mathcal{M} := ( \mathcal{X}, \mathcal{A}, \{ \mathbb{P}_{\theta} \}_{\theta \in \Theta} )

$$

2. Define:
- **Null hypothesis** $H_0$: $\theta \in \Theta_0 \subset \Theta$
- **Alternative hypothesis** $H_1$: $\theta \in \Theta_1  \subset \Theta$

3. Construct statistic $t(X)$, a function of the data that helps distinguish between $H_0$ and $H_1$.

Under $H_0$, the distribution (or "law") of $t(X)$ is denoted:
$
t(X) \sim L \quad \text{under } \mathbb{P}_{\theta_0} \in H_0
$

4. Compute the **Observed Value** of the statistic $t(x)$.

5. Compute the **p-value**. The **p-value** is the probability, under the null hypothesis, of observing a value of the test statistic as extreme or more extreme than the one observed:

$$

    \text{p-value}  := \mathbb P_{\theta_0}(t(X) \geq t(x))

$$

> (Note: For a **one-sided** test with large values of $t(X)$ as evidence against $H_0$; adjust accordingly for two-sided or left-tailed tests.)

6. Choose a significance level $\alpha$, typically $\alpha = 0.05$.

- If **p-value $\leq \alpha$**: Reject $H_0$
- If **p-value $> \alpha$**: Do **not** reject $H_0$
:::

::::tabs
:::exercise[Exercise]
Give the statistical test of level 10\% to check if the normal law $\mathcal N(\theta, 2)$ is center in 2 or not. You have two samples equal to $x=(3.7, 3.9)$.
:::

:::tips[Tips]
$\alpha = 0.10$ and you have a test of each side:
$H_0$: $\mu=2$ and $H_1$:$\mu\neq2=\mu>2$ and $\mu<2$
:::

:::proof[Result]
1. $\mathcal M = ( \mathbb R, \mathcal B(\mathbb R), \mathcal N(\theta, 2)_{\theta \in \Theta} )$
2. $H_0$: $\mu=2$ and $H_1$:$\mu\neq2=\mu>2$ and $\mu<2$
3. $t(X) = \bar X = (X_1+X_2)/2$ so $t(x)=3.8$ and $t_{obs}(X)=\sqrt{2} \frac{\bar X - 2}{\sqrt{2}} = \bar X - 2$ so $t_{obs}(x)=1.8$
4. $p-value = \mathbb P(|\mathcal N(0,1)| \geq 1.8) = 2\mathbb P(\mathcal N(0,1) \geq 1.8)=0.07$
5. $0.07 < \alpha = 0.10$ so we reject !
:::
::::

As you saw, tests really depend of the statistic (and the law associated) that you choose ! As I said, I am not fluent in test but I have to precise that a lot of different statistic/law can be found: Wald, Fisher, Student, $\chi^2$, Likelihood-ratio, etc. Some of them are really useful in a specific context. For example, when:
- you don't know the variance, use a Student law.
- $\Theta_0 \subset \Theta_1$, use a Wald or a Likelihood-ratio statistic (which follow a $\chi^2$ law).

Also you have to not be dumb and use the good side of your density to create a good rejection area. Some mathematician try to automatize this (Neyman-Pearson, etc.) but that's complicate the process for not so much.

If your aim is to understand machine learning, you will see that we can go really far with tests.

TODO: puissance d'un test

## Confidence Intervals

### How to create a CI

### In more than 1D

#### Bonferroni

#### Wald

## Link between tests and CI
$$
