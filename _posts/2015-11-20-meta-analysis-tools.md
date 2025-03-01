---
layout: post
title: Meta-analysis Tools
date: 2015-11-20 01:59:00
description: Guide on meta-analysis tools
tags: meta, analysis, meta-analysis
categories: meta-analysis
thumbnail: assets/img/blog/sdm_screenshot.jpg
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
---


## Introduction

**Seed-based *d* Mapping** (formerly *“Signed Differential Mapping”*) is a statistical technique for **meta-analyzing** studies on differences in brain activity or structure which used neuroimaging techniques such as **fMRI, VBM, DTI or PET**. The methods have been fully validated in several studies (see references below), and meta-analyses using this method have been already published at the highest quality journals.

![sdm_screenshot](/assets/img/blog/sdm_screenshot.jpg)

## The method

An [introduction of the method](https://www.sdmproject.com/manual?show=Introduction) can be found in the [SDM Reference Manual](https://www.sdmproject.com/manual).

Briefly, some of the features are:

- Possibility of combining studies from which only **peak coordinates** are available with studies from which **SPM t-maps** are available, highly increase the power of the meta-analysis.
- Use of **specific masks correlation templates** for **fMRI**, **PET**, **gray matter**, **white matter**, **fractional anisotropy**, **TBSS** and **cerebrospinal fluid** to account for the anisotropy in the spatial covariance of the brain, highly increasing the accuracy of the recreation of the effect size maps.
- Accounting for peaks’ **effect-size** and **signed maps** to counteract positive and negative differences.
- Weighting the calculations for **intra-study variance** (i.e. studies with large sample sizes and/or lower error contribute more), **inter-study heterogeneity** and other optional weights.
- Use of the **random-effects general linear models** to allow meta-analytical [comparisons between groups, meta-regressions and use of covariates](http://www.sdmproject.com/manual?show=lm_groups).
- Complementary analyses such as **exploration of heterogeneity** (by means of heterogeneity maps, subgroup analyses and [meta-regressions](http://www.sdmproject.com/manual?show=lm_regression)) and [jackknife analyses](http://www.sdmproject.com/manual?show=jackknife) (to assess the**replicability** of the results)

Other useful tools within the website:

- [Web utilities for conversions](http://www.sdmproject.com/utilities/)
- [Tutorial overview of method and how to implement using data](http://www.sdmproject.com/software/tutorial.pdf)
- [Downloading the software](http://www.sdmproject.com/software/)
  - Available for: Linux, Windows, Mac OSX, and SPM




