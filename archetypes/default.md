---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
artigo: false

article: true
section: "teoria" # teoria, desafio, datasheet
descricao: "Descricao que vai no card" # vai no seo tbm
repo: "/repositorio_git"
categories: ["categoria"]
tags: ["a","b","c"] # gera uma lista de paginas para cada categoria
tags_seo: "a, b, c" # tags que vai no seo
img_post: "/stes.jpg"  # img do post para as redes sociais.

---

