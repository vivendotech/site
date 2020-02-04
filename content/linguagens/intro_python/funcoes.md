---
title: "Como construir funções no Python"
date: 2020-01-31T00:14:11-03:00
draft: false

slug: python-como-funcoes

descricao_rapida: "Reservamos uma palavra e ela faz algo!"
repo: "desafio_certi"
---


{{< promessa >}}
   <h2> Funções </h2>
  
  <p> As funções servem para reaproveitar uma série de linhas de códigos. De um forma masi refiniada serve para juntar uma série de ações dentro de um verbo. </p>

{{< /promessa >}}



# Definindo uma função
Uma função serve para encapsular uam série de ações dentro de um verbo. Por exemplo, as ações que uma pessoas deve fazer para correr.

## Usando uma função

```py
print("Oi mundo")
```

## Escrevendo sua primeira função
```py
def correr():
    mecher_perna_esquerda()
    mecher_perna_direita()
```

## Passando argumentos para a função

```py
def correr(perna):
    print(perna)
```


{{< gist jmarcolan 59c72e64334b06dfd88cae1e086cfe0b >}}

