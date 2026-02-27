---
layout: page
title: "The Duke House's Ideal Daughter-in-law"
permalink: /TDHIDIL/
---

## Synopsis
The legitimate eldest grandson of the Grand Duke of Jing, Zhao Huanxi, was born into a prestigious family with beauty as lovely as flowers. However, being confined to the inner courtyard, he did not seek advancement, having nothing to his credit except for his good looks.
---

## Table of Contents

{{ site.TDHIDIL | size }}

<ul>
{% assign chapters = site.TDHIDIL | sort "order" %}
{% for chapter in chapters %}
  <li>
    <a href="{{ chapter.url | realtive_url }}">
      {{ chapter.title }}
    </a>
  </li>
{% endfor %}
</ul>
