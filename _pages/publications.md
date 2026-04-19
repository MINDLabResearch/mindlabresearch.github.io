---
layout: page
permalink: /publications/
title: papers
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018]
description: 
nav: false
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

Our papers in reverse-chronological order. As of {{ "now" | date: '%B %d, %Y' }}, our academic work received {{ site.data.gscholar.total_citations }} citations by the research community. Please find most up-to-date citation metrics via <a href="https://scholar.google.com/citations?user=AREhBXYAAAAJ&hl=en">Google Scholar</a>.


{% bibliography --file papers.bib --query @*[conference_abstract!=true && supervised!=true && ongoing_project!=true && book_chapter!=true && thesis!=true]* %}

<h2 class="year">Book Chapters</h2>

{% bibliography --file papers.bib --query @*[book_chapter=true]* %}

<h2 class="year">Theses</h2>

{% bibliography --file papers.bib --query @*[thesis=true]* %}

</div>
