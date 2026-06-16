---
layout: page
permalink: /projects/
title: projects
description: Projects.
nav: false
nav_order: 5
---

<h2>Ongoing Projects</h2>

<div class="publications">

{% bibliography --file projects.bib --group_by none --query @*[ongoing_project=true]* %}

</div>

<h2>MS Theses</h2>

<div class="publications">

{% bibliography --file projects.bib --group_by none --query @*[supervised=true]* %}

</div>
