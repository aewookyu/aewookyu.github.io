---
layout: page
permalink: /POJ/
---
<div class="novel-title">
  <h1>Pursuit of Jade</h1>
  <p class="chinese-title">逐玉</p>
  <p class="novel-author"><em>Tuanzi Laixi (团子来袭)</em></p>
</div>

<img src="{{ '/assets/images/zhuyu.jpg' | relative_url }}" class="novel-cover">

## Synopsis

Her parents had passed away, her childhood sweetheart called off their engagement, and her relatives were circling like vultures to seize her family inheritance. For the sake of her five-year-old younger sister, Fan Changyu decided to take in a live-in husband.

She set her sights on a man she had rescued. Covered in wounds and completely penniless, he had nothing going for him except a handsome face.

The two quickly reached an agreement: she would offer him shelter to nurse his injuries, and he would enter a fake live-in marriage to help her protect her estate.

Once the family business was secure, Fan Changyu prepared to write the divorce agreement as promised. Unexpectedly, war broke out, and the imperial court began conscripting men. The man was dragged off as a common soldier, vanishing without a trace.

When she saw him again, he was lying in the wounded soldiers' tent, drenched in blood. His blood-stained face remained as handsome as ever, but his private's uniform was hacked to ribbons.

Seeing how brutally he was struggling in the army, Fan Changyu’s eyes welled with tears: "Stop serving in the military. Come home with me, I'll butcher pigs to support you."

The man half-lidded his eyes and coughed up a mouthful of blood: "You wanted to divorce me..."

Fan Changyu sobbed, "No more divorce, no more!"

---

## Table of Contents
<ul>
{% assign chapters = site.zhuyu | sort: "order" %}
{% for chapter in chapters %}
  <li>
    <a href="{{ chapter.url | relative_url }}">
      {{ chapter.title }}
    </a>
  </li>
{% endfor %}
</ul>
