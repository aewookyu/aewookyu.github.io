---
layout: page
title: "The Duke House's Ideal Daughter-in-law"
permalink: /TDHIDIL/
---
<img src="{{ '/assets/images/gongfujiaxi.jpg' | relative_url }}" class="novel-cover">

## Synopsis
The legitimate eldest grandson of the Grand Duke of Jing, Zhao Huanxi, was born into a prestigious family with beauty as lovely as flowers. However, being confined to the inner courtyard, he did not seek advancement, having nothing to his credit except for his good looks.
---

## Table of Contents

{{ site.TDHIDIL | size }}

<ul>
{% assign chapters = site.TDHIDIL | sort: "order" %}
{% for chapter in chapters %}
  <li>
    <a href="{{ chapter.url | relative_url }}">
      {{ chapter.title }}
    </a>
  </li>
{% endfor %}
</ul>
