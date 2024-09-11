{{ site.data.l10n.introduction }}

{% include filter active = include.active %}

{% assign topics = "" | split: ',' %}

{% for ja in site.aka %}
  {% if ja.lang == page.lang %}
    {% for tag in ja.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: ja %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for db in site.boborzi %}
  {% if db.lang == page.lang %}
    {% for tag in db.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: db %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for vh in site.hoepfner %}
  {% if vh.lang == page.lang %}
    {% for tag in vh.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: vh %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for ah in site.hofmann %}
  {% if ah.lang == page.lang %}
    {% for tag in ah.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: ah %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for jk in site.kircher %}
  {% if jk.lang == page.lang %}
    {% for tag in jk.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: jk %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for pk in site.kroenes %}
  {% if pk.lang == page.lang %}
    {% for tag in pk.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: pk %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for ll in site.luttkus %}
  {% if ll.lang == page.lang %}
    {% for tag in ll.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: ll %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for nm in site.mandischer %}
  {% if nm.lang == page.lang %}
    {% for tag in nm.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: nm %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for tt in site.thummerer %}
  {% if tt.lang == page.lang %}
    {% for tag in tt.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: tt %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for jt in site.trommer %}
  {% if jt.lang == page.lang %}
    {% for tag in jt.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: jt %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% for yz in site.zhang %}
  {% if yz.lang == page.lang %}
    {% for tag in yz.tags %}
      {% if page.tag contains tag %}
        {% assign topics = topics | push: yz %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign topics = topics | sort: "date" | reverse %}


{% for t in topics %}
### {{ t.title }}
  {% include feature_row img_src=t.img_src copyright=t.copyright content=t.content contact=t.contact additional_info=t.additional_info tags=t.tags %}
{% endfor %}
