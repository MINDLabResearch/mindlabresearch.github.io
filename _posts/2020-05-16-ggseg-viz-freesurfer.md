---
layout: post
title: ggseg visualization with Freesurfer data in R
date: 2020-05-16 01:59:00
description: A step-by-step guide for installing and using the ggseg visualization toolbox in RStudio, covering required libraries, installation steps, and atlas options for neuroimaging data.
tags: ggseg freesurfer
categories: freesurfer
thumbnail: assets/img/blog/freesurfer-viz-ggseg.png
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
---

<img src="/assets/img/blog/freesurfer-viz-ggseg.png" width="600">

## Purpose of this Post

I enjoy finding new ways to visualize data in a meaningful (and also aesthetically pleasing) way. Finding the right tools in order to get your message across adds value, but can be challenging. When I learned about this visualization toolbox with the multitude of options it has, I had to learn how to use it – and it’s actually quite simple!

The links to both the blog and GitHub pages below are *extremely informative* (so please also refer to them)! Here, I wanted to outline the installation process I used in order to get the program running in RStudio (Part 1) and provide some examples of things I have done with the toolbox to potentially spark some inspiration (Part 2)!

## Getting Started

### Source

All the credits for this awesome toolbox go to Dr. Athanasia Mowinckel & Dr. Didac Vidal Pineiro at the Center for Lifespan Changes in Brain and Cognition, University of Oslo. Be sure to check out Dr. Mowinckel’s [blog](https://drmowinckels.io/blog/introducing-the-ggseg-r-package-for-brain-segmentations/), which has a great overview of the different options available with the toolbox.

- **ggseg GitHub link:** [GitHub - ggseg/ggseg: Plotting tool for brain atlases, in ggplot](https://github.com/LCBC-UiO/ggseg)
- **ggseg GitHub README.md:** [ggseg/README.md at master · ggseg/ggseg · GitHub](https://github.com/LCBC-UiO/ggseg/blob/master/README.md)

**Note:** There seem to be some updates happening at the moment with the toolbox, so this may not work 100% for you, but it worked for me in May of 2020. Updates to come if this changes.

### Compatibility – What I Used

- **Operating System:** Windows 10  
- **R version:** 4.0.0  
- **RStudio version:** 1.2.5033

## Installation Guide

### Libraries to Install Prior to ggseg

```r
library(ggplot2)
library(devtools)
library(tidyselect)
library(magrittr)
library(rmarkdown)
library(stringr)
library(stringi)
library(tibble)
library(dplyr)
library(purrr)
library(pandocfilters)
library(tidyr)
```

If some libraries are missing, use the command below (using "tidyr" as an example):

```bash
install.packages("tidyr")
```

### Installing ggseg

On the GitHub website, they state to use:

```bash
install.packages("remotes")
remotes::install_github("LCBC-UiO/ggseg", build_vignettes = TRUE)
```

Currently, there is a bug that is being fixed in the program with the Vignettes, so you will need to modify the code until this is fixed to:

```bash
install.packages("remotes")
remotes::install_github("LCBC-UiO/ggseg", build_vignettes = FALSE)
```

Personally, I found that `devtools` works for installing the program without any problems. Since I already installed `devtools` above, just enter the following in RStudio:

```r
devtools::install_github("LCBC-UiO/ggseg", build_vignettes = FALSE)
library(ggseg)
```

This will take a little bit of time and install version 1.5.4. You should see this in your window as:

```bash
building 'ggseg_1.5.4.tar.gz'
```

### Atlases

After installing ggseg, there are two default atlases pre-installed based on the default FreeSurfer output from running `recon-all`:

- **Desikan-Killany cortical atlas (dk)**
- **Subcortical segmentation atlas (aseg)**

Additionally, the following atlases are available, and the links show examples for how to use the atlases. These are beyond the scope of this post; I will focus just on the default atlases included in the package.

- [Yeo](https://github.com/LCBC-UiO/ggsegYeo2011/blob/master/README.md) – both 7 and 17 network data
- [Desterieux](https://github.com/LCBC-UiO/ggsegDesterieux/blob/master/README.md) – the 2009 atlas
- [Chen](https://github.com/LCBC-UiO/ggsegChen/blob/master/README.md) – both thickness and area maps
- [Schaefer](https://github.com/LCBC-UiO/ggsegSchaefer/blob/master/README.md) – both 17 and 7 networks
- [Glasser](https://github.com/LCBC-UiO/ggsegGlasser/blob/master/README.md) – full atlas
- [JHU](https://github.com/LCBC-UiO/ggsegJHU/blob/master/README.md) – white tract atlas
- [Tracula](https://github.com/LCBC-UiO/ggsegTracula/blob/master/README.md) – white tract atlas
- [ICBM](https://github.com/LCBC-UiO/ggsegICBM/blob/master/README.md) – white tract atlas
- [HO](https://github.com/LCBC-UiO/ggsegHO/blob/master/README.md) – Harvard-Oxford cortical (FSL)
- [DefaultExtra](https://github.com/LCBC-UiO/ggsegDefaultExtra/blob/master/README.md) – extra 2D view for dk, p/a division

To install the extra atlases, first install ggsegExtra:

```r
devtools::install_github("LCBC-UiO/ggsegExtra", build_vignettes = FALSE)
library(ggsegExtra)
```

To check which atlases are available, enter the following command:

```r
ggseg_atlas_repos()
```

Install the atlas you would like to use (using the Glasser atlas as an example):

```r
devtools::install_github("LCBC-UiO/ggsegGlasser")
library(ggsegGlasser)
```

Now you should have ggseg installed and ready to go without any problems!
