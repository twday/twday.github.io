---
layout: default
title: Projects
---

{% for project in site.projects %}
*{{ project.title }}* {{ project.timeSpan }}
{{ project.subtitle }}
{{ project.content }}
{% endfor %}