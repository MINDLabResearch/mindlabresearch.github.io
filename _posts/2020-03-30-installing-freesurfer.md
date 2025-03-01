---
layout: post
title: Installing Freesurfer Using Enhanced Mode Ubuntu 18.04 for Hyper-V on Windows 10
date: 2020-03-30 01:59:00
description: Guide to installing FreeSurfer on Ubuntu 18.04 in Hyper-V (Windows 10) with additional setup steps
tags: installation, freesurfer
categories: freesurfer
thumbnail: # assets/img/blog/sdm_screenshot.jpg
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
---


# Prerequisites

Before getting started, I first installed Ubuntu within Hyper-V on my Windows 10 computer following the instructions below:  
[Using Enhanced Mode Ubuntu 18.04 for Hyper-V on Windows 10 - Scott Hanselman's Blog](https://www.hanselman.com/blog/UsingEnhancedModeUbuntu1804ForHyperVOnWindows10.aspx)

# Link to FreeSurfer Installation Page

While the link below is extremely well-written and helpful, I noticed a few steps during my installation process using Ubuntu for Hyper-V that required additional steps, not listed on the page. This guide is meant to help others using the same system with the installation procedure – described in detail below.  
[DownloadAndInstall - Free Surfer Wiki](https://surfer.nmr.mgh.harvard.edu/fswiki/DownloadAndInstall)

# Installation Steps

## 1. Download FreeSurfer

Download FreeSurfer for Linux from the download page while logged into your Ubuntu VM.

**File to download:**  
`freesurfer-Linux-centos6_x86_64-stable-pub-v6.0.0.tar.gz`

**Link to download:**  
[Download FreeSurfer](https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/6.0.0/freesurfer-Linux-centos6_x86_64-stable-pub-v6.0.0.tar.gz)  
*(Note: You may need to be logged into your Gmail account to download the file.)*

## 2. Change Permissions

Ensure you have permissions to write into `/usr/local/`, where you will unpack the FreeSurfer package.

```bash
sudo chmod -R 777 /usr/local/
```

## 3. Unpack FreeSurfer Package

Unpack the package in the directory where you saved it. For example:

```bash
cd /home/shaas/Downloads
tar -C /usr/local -xzvf freesurfer-Linux-centos6_x86_64-stable-pub-v6.0.0.tar.gz
```

## 4. Install Additional Necessary Packages

```bash
sudo apt-get -y install bc binutils libgomp1 perl psmisc sudo tar tcsh unzip uuid-dev vim-common libjpeg62-dev
```

## 5. Setup & Configuration

To begin using FreeSurfer, open a terminal window, define an environment variable called **FREESURFER_HOME** (set to the location where FreeSurfer was installed), and source the setup script. This sourcing needs to be done every time you open a new terminal window, or you can add the lines below to your default setup file (e.g., `.bashrc` or `.cshrc`).

```bash
export FREESURFER_HOME=/usr/local/freesurfer
source $FREESURFER_HOME/SetUpFreeSurfer.sh
```

If done correctly, you should see output similar to:

```
Setting up environment for FreeSurfer/FS-FAST (and FSL)
FREESURFER_HOME /usr/local/freesurfer
FSFAST_HOME     /usr/local/freesurfer/fsfast
FSF_OUTPUT_FORMAT nii
SUBJECTS_DIR    /usr/local/freesurfer/subjects
MNI_DIR         /usr/local/freesurfer/mni
```

## 6. Get a License to Use FreeSurfer

A license key must be obtained to make the FreeSurfer tools operational. The license is free and comes in the form of a `license.txt` file. Once obtained, copy it to your FreeSurfer installation directory (the location defined by the **FREESURFER_HOME** environment variable).

**Get license here:**  
[FreeSurfer Registration Form](https://surfer.nmr.mgh.harvard.edu/registration.html)

After downloading in Ubuntu, copy the file to your FreeSurfer folder:

```bash
cp /home/shaas/Downloads/license.txt /usr/local/freesurfer
```

## 7. Additional Items to Install

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install libtool autoconf build-essential pkg-config automake tcsh
```
