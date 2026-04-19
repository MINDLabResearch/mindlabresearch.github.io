---
layout: page
permalink: /publications/abstracts/
title: abstracts
description:
nav: false
nav_order: 3
---

<!-- _pages/abstracts.md -->

{% include bib_search.liquid %}

<div class="publications">

Conference abstracts in reverse-chronological order.

{% bibliography --file papers.bib --query @*[conference_abstract=true]* %}

</div>
