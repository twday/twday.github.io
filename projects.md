---
layout: default
title: Projects
---
{% for project in site.projects %}
    {% if project.coverImage %}
        ![{{ project.title }}]({{ site.baseurl }}/assets/images/projects/{{ project.coverImage }})
    {% endif %}
    *{{ project.title }}* {{ project.timeSpan }}
    {% if project.repo %}
        {{ project.repo }}
    {% endif %}
    {{ project.subtitle }}
    {{ project.content }}
{% endfor %}