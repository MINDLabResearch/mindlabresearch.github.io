---
layout: page
permalink: /publications/
title: publications
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018]
description: 
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

Our publications in reverse-chronological order. As of {{ "now" | date: '%B %d, %Y' }}, our academic work received {{ site.data.gscholar.total_citations }} citations by the research community. Please find most up-to-date citation metrics via <a href="https://scholar.google.com/citations?user=AREhBXYAAAAJ&hl=en">Google Scholar</a>.


{% bibliography %}

</div>
