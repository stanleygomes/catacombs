---
title: Escalonando aplicações frontend
date: '2021-12-18'
spoiler: Modinha ou padrão de projeto?
tags: javascript, microservices, microfrontend, webdev
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/sobre-micro-front-ends%2Fy4w7rrxd2rku3ucrrbez.jpeg?alt=media&token=13a5b769-96a8-4c98-9c26-a3b6e14c4b0f)

Hoje eu vou abordar um tema que está em pleno uso e cada vez mais se tornando um padrão de arquitetura de desenvolvimento no frontend, o conceito de Micro Front-end.

Não posso falar de Micro Front-end sem abordar a forma como eram construídas as aplicações antes do seu surgimento. Antigamente, ao desenvolver uma aplicação frontend, todo o código era feito dentro um repositório e totalmente interdependente. 

Com o tempo, os programadores foram adaptando várias formas de separar o frontend, de forma que ele se tornasse mais desacoplado.

Com o surgimento do conceito de Micro Front-end, agora uma aplicação é dividida em módulos de forma que algumas partes específicas da tela são separadas em diferentes repositórios.

![microfrontend](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/sobre-micro-front-ends%2Fxf6oe7743le01dvakmp1.jpeg?alt=media&token=e870cce9-f1cd-41dc-8ef1-b7c84ce534d0)

Cada módulo é uma aplicação com sua stack particular (react, angular, vue etc), funcionando de forma independente, sem um estado global ou compartilhamento de recursos.

Apesar de serem independentes, os micro serviços no frontend precisam ter alguma forma de se comunicar, afinal, juntos eles são uma única aplicação. Geralmente usa-se o recurso de localstorage ou frameworks específicas para lidar com esse cenário, como o [Single SPA](https://single-spa.js.org).

![monorepo vs microfrontend](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/sobre-micro-front-ends%2Foy4matnmsd9lc9mj3dac.jpeg?alt=media&token=6510fa75-94e8-49bc-a005-a64701b193eb)

Por fim, com todo esse hype sobre esse tema, acabam aparecendo os questionamentos: "Será que devo parar de escrever aplicações monlíticas?". A resposta é simples: Não. Cada projeto vai demandar uma arquitetura própria pensada considerando o resultado que se espera. O micro front-ends são flexíveis para grandes aplicações,  com escalabilidade e várias equipes, mas não são tão vantajosos para projetos com poucas pessoas.

Se você quiser contribuir mais sobre o conceito de Micro Front-ends, comenta aqui embaixo.

---

Se você gostou, me segue para novos posts e deixa o like nesse post.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀
