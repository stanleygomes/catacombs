---
title: Escalonando aplicações frontend
date: '2021-10-20'
spoiler: Escalonar é preciso
tags: amp, html, web
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/escalonando-aplicacoes-frontend%2Futm2d5to571g7h9jyke0.jpeg?alt=media&token=7a440f50-b357-4f4e-ab9b-55392c811ce5)

Sempre que começamos a desenvolver um novo projeto de software, temos que considerar a escalabilidade de até onde e quantas pessoas vão conseguir utilizar nossa ferramenta simultaneamente. É um consenso que escalar a aplicação é um grande desafio e envolve um planejamento desde o início do desenvolvimento.

Nesse post, o objetivo é abordar os tópicos sobre dicas de por onde começar a escalar o seu código frontend. Quando falamos sobre escalar a infraestrutura (seja verticalmente ou horizontalmente), fica mais fácil de entender e executar, mas quando se trata de código, a demanda é se aprofundar mais no assunto.

## Código escalável

Um código escalável tem fundamentos básicos que podemos definir como regras. Começamos definindo que o código precisa ser eficiente e como, de maneira geral, ele vai utilizar os recursos de processamento do cliente, para que ele possa ser acessado a partir do maior número de pessoas, ele precisa ter eficiência de processamento, baixo consumo de banda e [responsividade](https://www.w3schools.com/html/html_responsive.asp).

![performance de código](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/escalonando-aplicacoes-frontend%2F7p7fxkrbsz7olupp59qr.png?alt=media&token=677d0c65-67d9-4992-b0a2-1e1e5f3a64de)

Outros fatores fundamentais para um código escalável é possuir recursos pequenos e independentes ([single responsability principle](https://medium.com/@tbaragao/solid-s-r-p-single-responsibility-principle-2760ff4a7edc)), que podem ser servidos de forma independente. Isso é requisito para facilitar manutenção e provisão de recursos.

Abaixo vou tentar listar algumas outras dicas para escalonar o seu frontend:

1. Backend desacoplado do frontend, escalation separado;

2. Se sua aplicação tem [SSR](https://www.treinaweb.com.br/blog/spa-e-ssr-quais-as-diferencas) (server side rendering) garanta que apenas as páginas que realmente precisam ser geradas no server sejam;

3. Lazy loading: Carregue apenas recursos que sejam necessários na usabilidade do usuário. Os demais recursos serão carregados sob demanda (Scripts, imagens, fontes, css);

4. Trabalhe com CDN e caching com eficiência para reduzir o consumo de recursos de servidor de forma inteligênte e diminuir tempo de resposta e carregamento do frontend;

5. Reduza a complexidade do código e trabalhe com código limpo. Dessa forma, toda equipe terá facilidade de entender, evoluir e corrigir o código, evitando bugs inesperados e indisponibilidade da plataforma. É muito importante também que você remova o código e funcionalidades que não são utilizadas;

6. Transite o mínimo necessário de informação nas requests para o backend para reduzir o consumo de recursos de banda e aumentar velocidade de resposta;

7. Crie testes automatizados para garantir mais velocidade de entrega com menos riscos de quebra da aplicação;

9. Monitore sua aplicação com rotinas automatizadas que gerem métricas e capturem erros, como por exemplo, o Sentry(https://sentry.io);

Se você conhece alguma outra técnica para otimizar o frontend, comenta aqui embaixo.

---

Se você gostou, me segue para novos posts e deixa o like nesse post.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀

Este post foi baseado no artigo do Nagendra Prajwal:
https://www.linkedin.com/pulse/intro-scalable-frontend-what-how-write-one-nagendra-prajwal


