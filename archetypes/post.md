---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true


article: true
section: "teoria" # teoria, desafio, datasheet
descricao: "Hello World"
repo: "desafio_certi"
categories: ["categoria"]
tags: ["a","b","c"]
tags_seo: "a, b, c"
img_post: "/stes.jpg"
---



## Promessa inicial


{{< promessa >}}
   <h2> TLDR </h2>
  
  <p> Promessa do que sera visto no post. Um resumo TLDR. </p>

{{< /promessa >}}

## Figura



## Code snipet

```py
s = "Python syntax highlighting"
print(s)
class joao:
    def __init__(self):
        pass
```

## Highligt

{{< highlight html >}}

<title>Example HTML5 Document</title>
Test

{{< /highlight >}}


## Graficos

{{<mermaid>}}
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
{{</mermaid>}}
https://codewithhugo.com/mermaid-js-hugo-shortcode/
https://learn.netlify.com/en/shortcodes/mermaid/


## Twitter

{{< tweet 1160591925222748162 >}}