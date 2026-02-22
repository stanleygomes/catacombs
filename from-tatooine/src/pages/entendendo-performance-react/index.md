---
title: Debaixo do capô - Entendendo a performance no React
date: '2021-05-05'
spoiler: O que serão esses algoritmos de renderização de componentes no react?
tags: javascript, reactjs
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/entendendo-performance-react%2Fconciliation-0.jpeg?alt=media&token=771eda43-5a1c-4270-9aa0-8cdd2f6569ce)

Pessoal, muito se fala sobre a alta performance de renderização de aplicações desenvolvidas utilizando React. Um dos motivos que mais são importantes quando se toca neste ponto é o [React Conciliation](https://reactjs.org/docs/reconciliation.html).

Esta API do React é responsável por observar e gerenciar o que muda a cada ciclo de re-renderização da sua aplicação/componentes. Nesse processo o React utiliza um algoritmo chamado `React’s “diffing” algorithm`, que é responsável por entender melhor o que muda a cada renderização e alterar o DOM da forma mais performática possível.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/entendendo-performance-react%2Fconciliation-1.jpg?alt=media&token=a56a35a1-4724-48c8-85e4-3a5a8d02a52c)

> *Existem algumas ações simples que o algoritmo faz para entender essas diferenças entre as versões de renderizações, que nós podemos observar para trabalhar com mais performance.*

## Elementos de diferentes tipos

Quando o React compara as versões, ele observa o tipo de elemento que está renderizando aquela árvore de componentes. Quando o elemento é alterado, todos seus filhos são re-renderizados. Veja no exemplo abaixo:

Neste cenário, eu vou alterar um elemento que era do tipo `div` e mudou para o tipo `span`.

```html
<!-- Versão anterior do componente -->
<div>
  <ListaDeUsuarios />
</div>

<!-- Nova versão do componente -->
<span>
  <ListaDeUsuarios />
</span>
```

Neste caso acima, todo esse componente será re-renderizado.

## Elementos de mesmo tipo

Quando o elemento mantem seu tipo entre as versões o react analisa outras características para decidir o que vai ser re-renderizado.

Neste caso abaixo, o componente mantêm o tipo `div` entre as versões, porém o conteúdo da prop `title` é alterado. Neste caso, o React vai renderizar apenas esta alteração individual da prop.

```html
<!-- Versão anterior do componente -->
<div className="header" title="Meu App" />

<!-- Nova versão do componente -->
<div className="header" title="Meu App - Usuários" />
```

Um outro exemplo é a tag style, que é tratada de forma especial. Nesse caso abaixo, apenas a propriedade `color` do CSS do elemento em questão é alterada, então o React vai entender que apenas essa propriedade deve ser re-renderizada, ao mesmo tempo que o `textAlign` continua imutável.

```html
<!-- Versão anterior do componente -->
<div style={{color: 'red', textAlign: 'left'}} />

<!-- Nova versão do componente -->
<div style={{color: 'green', textAlign: 'left'}} />
```

## Lista de elementos

Ao renderizar uma lista de elementos, você pode utilizar uma propriedade chamada `key` para que instruí-lo a re-renderizar os elementos da lista que mudaram as `keys`. 

```html
<!-- Versão anterior do componente -->
<ul>
  <li key="first">first</li>
  <li key="second">second</li>
</ul>

<!-- Nova versão do componente -->
<ul>
  <li key="first">first</li>
  <li key="second">second</li>
  <li key="third">third</li>
</ul>
```

Caso a ordem desses elementos seja alterada, os elementos que mantiverem mesmas keys não serão re-renderizados.

```html
<!-- Versão anterior do componente -->
<ul>
  <li key="first">first</li>
  <li key="second">second</li>
</ul>

<!-- Nova versão do componente -->
<ul>
  <li key="second">second</li>
  <li key="first">first</li>
</ul>
```

Estas são técnicas que nos ajudam a escrever um código que o motor de renderização do React compreenda a melhor forma de re-renderizar nossos componentes e assim ganhamos performance.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/entendendo-performance-react%2Fconciliation-2.jpg?alt=media&token=2c9ad121-d373-4dca-9e61-8c2786bfce96)

Este post foi baseado na documentação do [React Conciliation](https://reactjs.org/docs/reconciliation.html), usando os mesmos exemplos apresentados na DOC.

---

Este post não seria possível sem o trabalho de pesquisa e discussão do time do capítulo de frontend do LuizaLabs.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀

Até mais.
