---
title: "Linear Regression"
sidebar_position: 2
---

:::definition[Regression]
A regression function is the estimation of $\mathbb E(Y|X)$.
:::

:::proposition[Proposition]
The regression minimize the quadratic risk $\mathcal R(h)=\mathbb E((h(X)-Y)^2)$
:::

:::proof[Proof]
$$
\begin{align*}
    R(h)
    &= \mathbb E((h(X)-Y)^2)\\
    &= \mathbb E((h(X)-\mathbb E(Y|X)+\mathbb E(Y|X)-Y)^2) \\
    &= \mathbb E((h(X)-\mathbb E(Y|X))^2+(\mathbb E(Y|X)-Y)^2+2(h(X)-\mathbb E(Y|X))(\mathbb E(Y|X)-Y)) \\
    &= \mathbb E((h(X)-\mathbb E(Y|X))^2)+\mathbb E((\mathbb E(Y|X)-Y)^2)+2\mathbb E((h(X)-\mathbb E(Y|X))(\mathbb E(Y|X)-Y)) \\
    &= \mathbb E((h(X)-\mathbb E(Y|X))^2)+R(\mathbb E(Y|X))+0 \geq R(\mathbb E(Y|X))
\end{align*}
$$
So the minimum is obtain for $h(X)=\mathbb E(Y|X)$
:::

:::definition[Linear Regression]
Suppose that the target follow $Y = X^\top \beta + \varepsilon$ with:
1. linear expectation in $\beta$ : $\mathbb E(Y|X) = X^\top \beta$  
2. centered error : $\mathbb E(\varepsilon | X) = 0$
3. variance of the error is constant : $var(\varepsilon | X) = \sigma^2$
4. independence of the error: $cov(\varepsilon_i, \varepsilon_j|X_i, X_j) = 0$
:::

:::note

The hypotesis class is $\mathcal H := \{ h_\beta(x) = x^\top \beta | \beta \in \mathbb R^p \}$. We can also denote $x^\top \beta=\eta$.

:::

:::definition[Gaussian Linear Regression]
Suppose that the target follow $Y = X^\top \beta + \varepsilon$ with:
1. linear expectation in $\beta$ : $\mathbb E(Y|X) = X^\top \beta$  
2. errors follow $\varepsilon \sim \mathcal N(0, \sigma^2)$ iid
:::

Above the $X$ is a random vector. Below, we will use the experimental plan $X$ define as
$
\begin{pmatrix}
X_1^\top \\
X_2^\top \\
X_3^\top
\end{pmatrix}
$

:::note

The associated model is given by $\mathcal M=(\mathbb R, \mathcal B(\mathbb R), \mathcal P = \mathcal N(X\beta, \sigma^2 I_n)_{(\beta, \sigma^2)\in \mathbb R^p \times \mathbb R^*_+})$.
:::

:::proposition[Identifiable]
The model is identifiable iff $X$ is full rank or $Ker(X)={0}$ or $X$ injective or columns of $X$ independent.
:::

When to do a linear regression ? For each couple of variables do a scatter plot and if you see a linear correlation with the target for a lot of features, bingo ! Be careful, if two features are "strongly" correlate you can drop one.

:::definition[Intercept]
We can add a feature equal to $1$ for each data because, for now, the line go through the origin. With the intercept we add a new estimator $\beta_0$ that represent the height at the origin of the line.
:::

:::tips[Tips]
Normalize the features is not mandatory but it can be interesting if you want to compare the elements of $\beta$. It can also help for numerical stabilization.
:::

## Estimation

You have two way to estimate $\theta$: from residual sum of squares or from likelihood. They both have the same estimator of $\beta$ and two equivalent estimator of $\sigma^2$. Keep in mind that the first one is for linear regression and the second need the gaussian supposition.

:::definition[Residual sum of squares]
Residual sum of squares is the empirical risk define as $RSS(h):=\sum_i(Y_i-h(X_i))^2=||Y-h(X)||^2_2=||Y-X\beta||^2_2$
:::

We want to find the learning rule $\hat h(X)=X\hat\beta$ that minimize this risk $RSS$.

:::definition[Residual sum of squares Estimator]
$\hat \beta_{RSS}:=\arg\min_{\beta \in \mathbb R^p}||Y-X\beta||^2_2$
:::

:::definition[Maximum Likelihood Estimator]
$\hat \theta_{MLE}:=(\hat\beta_{MLE}, \hat\sigma^2_{MLE}):=\arg\max_{\theta \in \mathbb R^p\times \mathbb R^*_+}\ell_\theta(Y)$
:::

:::proposition[Proposition]
If the model is identifiable, $\hat \beta=\hat \beta_{RSS}=\hat \beta_{MLE}=(X^\top X)^{-1}X^\top Y$
:::

::::tabs
:::proof[Proof RSS]
$$
\begin{align*}
    \nabla_\beta ||X \beta-Y||^2_2
    &=  2X^\top X \beta - 2X^\top Y
    = 0
    \Rightarrow 
    \beta
    = (X^\top X)^{-1}X^\top Y
\end{align*}
$$
The inverse exist thank to the identifiability ! $\forall v \in \mathbb R^p s.t X^\top Xv=0 \Rightarrow v^\top X^\top Xv=0 \Rightarrow ||Xv||^2_2=0 \Rightarrow v=0$ so $Ker(X^\top X)=\{0\}$

Check if it is the minimum $\nabla^2_\beta ||X \beta-Y||^2_2=2X^\top X >0$ OK!
:::

:::proof[Proof MLE]
We suppose $Y|X \sim \mathcal N(XB, \sigma^2 I_n)$ so $L(\theta;Y|X)=\frac{1}{(2\pi \sigma^2)^{n/2}}\exp{(- \frac{1}{2\sigma^2}||Y-X\beta||^2_2)}$

$\ell_\theta(Y|X)= - \frac{n}{2} \log(2 \pi \sigma^2) - \frac{1}{2\sigma^2}||Y-X\beta||^2_2$

$\partial_\beta \ell_\theta(Y|X) = \frac{1}{\sigma^2}X^\top(Y-X\beta)=0 \Rightarrow \hat \beta_{MLE}=(X^\top X)^{-1}X^\top Y$

Finally, we have Hessien definite negative. OK!
:::
::::

:::proposition[Proposition]
$b(\hat \beta)=0$ and $var(\hat \beta)=\sigma^2(X^\top X)^{-1}$ is the minimal variance possible for unbiased linear estimator.
:::

:::proof[Proof of the variance equality]
$$
\begin{align*}
    \hat \beta
    &= (X^\top X)^{-1}X^\top Y
    = (X^\top X)^{-1}X^\top (X\beta +\varepsilon)
    = \beta + (X^\top X)^{-1}X^\top \varepsilon
\end{align*}
$$
So,
$$
\begin{align*}
    var(\hat \beta)
    &= var((X^\top X)^{-1}X^\top \varepsilon)
    = (X^\top X)^{-1}X^\top var(\varepsilon) ((X^\top X)^{-1}X^\top)^\top
    = \sigma^2(X^\top X)^{-1}
\end{align*}
$$
:::

:::definition[Hat Matrix]
The **hat matrix** is defined as the orthogonal projection on $Im(X)$, $H_X:=(X^\top X)^{-1}X^\top$
:::

:::proposition[Proposition]
If the model is identifiable, $\hat \sigma^2_{RSS}=RSS(\hat h_{RSS})/(n-p)$ is an unbiased estimator of $\sigma^2$.

If the model is identifiable and gaussian, $\hat \sigma^2_{MLE}=RSS(\hat h_{MLE})/n$ is a biased estimator of $\sigma^2$.
:::

::::tabs
:::proof[Proof RSS]
$$
\begin{align*}
    \mathbb E(RSS(\hat h_{RSS}))
    &= \mathbb E(||X \hat \beta_{RSS}-Y||^2_2)
    = \mathbb E(||Y - \hat \varepsilon - Y||^2_2)
    = \mathbb E(||\hat \varepsilon||^2_2)
    = \mathbb E(tr(\hat \varepsilon ^\top \hat \varepsilon )) \\
    &= \mathbb E(tr(\hat \varepsilon  \hat \varepsilon^\top ))
    = tr(\mathbb E(\hat \varepsilon  \hat \varepsilon^\top ))
    = tr(\mathbb E(H_{X^\perp} \varepsilon \varepsilon^\top  H_{X^\perp}^\top ))
    = \sigma^2 tr(H_{X^\perp}) \\
    &= \sigma^2(n-p)
\end{align*}
$$
:::

:::proof[Proof MLE]
We suppose $Y|X \sim \mathcal N(XB, \sigma^2 I_n)$ so $L(\theta;Y|X)=\frac{1}{(2\pi \sigma^2)^{n/2}}\exp{(- \frac{1}{2\sigma^2}||Y-X\beta||^2_2)}$

$\ell_\theta(Y|X)= - \frac{n}{2} \log(2 \pi \sigma^2) - \frac{1}{2\sigma^2}||Y-X\beta||^2_2$

$\partial_{\sigma^2} \ell_\theta(Y|X) = - \frac{n}{2} \frac{2 \pi}{2 \pi \sigma^2} + \frac{2}{2\sigma^4} ||Y-X\beta||^2_2 \Rightarrow \hat \sigma^2_{MLE}=\frac{1}{n}||Y-X\hat \beta_{MLE}||^2_2=\frac{1}{n}RSS(\hat h_{MLE})$

Finally, we have $\partial^2_\beta \ell_\theta(Y|X)=-\frac{1}{\sigma^2}X^\top X$ and $\partial^2_{\sigma^2} \ell_\theta(Y|X) = + \frac{n}{2\sigma^4} - \frac{2}{\sigma^6} ||Y-X\beta||^2_2$ and $\partial_\beta \partial_{\sigma^2} \ell_\theta(Y|X)= \partial_{\sigma^2} \partial_\beta \ell_\theta(Y|X)=-\frac{1}{\sigma^4}X^\top(Y-X\beta)$ that is an Hessien definite negative. OK!
:::
::::

:::theorem[Conclusion]
For an identifiable **linear model**,

$\hat \beta=(X^\top X)^{-1}X^\top Y$ and $\hat \sigma^2=||Y-X\hat \beta||^2_2/(n-p)$

We don't have any information on the laws.
:::

:::theorem[Conclusion]
For an identifiable **gaussian linear model**, you have

$\hat \beta=(X^\top X)^{-1}X^\top Y \sim \mathcal N(\beta, \sigma^2(X^\top X)^{-1})$

and you can choose between

$\hat \sigma_1^2=||Y-X\hat \beta||^2_2/(n-p)$ or $\hat \sigma_2^2=||Y-X\hat \beta||^2_2/n$

but you have any way $\frac{n-p}{\sigma^2}\hat \sigma_1^2 =\frac{n}{\sigma^2}\hat \sigma_2^2 \sim \chi^2(n-p)$
:::

## Model Validation

### Confidence Interval

### Tests

### Error

### $R^2$

### Some plots

## New data

### Confidence Interval

### Cook distance

## Generalization

### To qualitative features

### To non linear features
