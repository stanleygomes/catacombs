---
title: BrazilJS Conf 2019 Highlights
date: '2019-09-04'
spoiler: Durante o evento foram ministradas diversas palestras.
tags: javascript, braziljs
---

A BrazilJS é um dos maiores eventos de Javascript do Brasil e todos os anos junta centenas de pessoas de todo o brasil para discutir temas relativos a linguagem e outras tecnologias relativas ao desenvolvimento web.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2Fanimated-braziljs-logo.gif?alt=media&token=a6659146-3207-4b0a-bc48-53734f25abb0)

Atualmente, o JavaScript é uma das linguagens mais populares do mundo, e em extrema ascensão, com destaque no mercado e certamente, a linguagem mais apoiada por empresas como Google, Mozilla, Microsoft, Facebook, entre outras gigantes do mercado de tecnologia.

Durante o evento foram ministradas diversas palestras.

## **JavaScript como primeira linguagem de programação**

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FHLLcAy6.jpg?alt=media&token=42d012c4-b765-4a9a-adfa-859b7aaefaf3)
*FOTO: Brayan Martins / Agência Preview*

Ministrada por Rodrigo Ribeiro, essa primeira palestra marcou a abertura do evento da BrazilJS 2019. Foi apresentado um pouco do histórico e evolução da linguagem Javascript, bem como sua importância e relevancia atualmente.

Rodrigo também apresentou seu projeto de responsabilidade social, o tecnogueto, que visa ajudar pessoas, com dificuldade de acesso à tecnologia, a programar usando Javascript. Conheça mais em: [www.tecnogueto.com.br](https://www.tecnogueto.com.br/)

## Building an Empire: How To Use Programming and Game Theory to Make Strategic Decisions

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FEgWmbni.jpg?alt=media&token=675b9d75-0ff8-4bf9-85d0-e24d65dd15f3)
*FOTO: Brayan Martins / Agência Preview*

Eva Bojorges veio em seguida, trazendo um cunho um pouco mais matemático ao evento.

Em sua palestra, Eva combinou Js com teoria dos jogos para encontrar a escolha que gerasse a maior probabilidade de vitória no programa de tv [Golden Balls](https://en.wikipedia.org/wiki/Golden_Balls), monstrando como a programação pode colaborar na tomada decisões estratégica.

Você pode ver mais sobre o assunto nesse [link](https://mindyourdecisions.com/blog/2012/04/24/how-to-beat-the-prisoners-dilemma-in-the-tv-game-show-golden-balls/).

## Project Fugu, reaching parity with native

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FlWZtqhy.jpg?alt=media&token=00e51b51-6b4c-4040-a50f-ff09dbd2ab91)
*FOTO: Brayan Martins / Agência Preview*

Com um título ousado, Kenneth Christiansen trouxe ao evento, o conteúdo que considerei como mais relevante, o [***Project Fugu](https://www.chromium.org/teams/web-capabilities-fugu)***. A proposta do projeto é parear as APIs de desenvolvimento com tecnologias web **(PWAs)** com o desenvolvimento em plataformas nativas (IOS e Android), usando a engine do Google Chrome.
> “Queremos fechar a lacuna de capacidade entre web e nativo e facilitar para os desenvolvedores a criação de ótimas experiências na web. Enquanto isso, precisamos preservar tudo o que há de bom na web.”

Algumas das APIs mais esperadas é a de acesso [nativo ao filesystem](https://developers.google.com/web/updates/2019/08/native-file-system) do dispositivo, conexão bluetooth 5.0 e NFC.

Conheça um pouco mais sobre algumas das novas APIs, no video apresentado na [Google Dev I/O 2019](https://www.youtube.com/watch?v=GSiUzuB-PoI) e também o status de algumas APIs que estão por vir em: [bit.ly/generic-sensors](http://bit.ly/generic-sensors).

## Elementar, meu caro Ivy

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FAHwzW9b.jpg?alt=media&token=c56bd0f5-1cee-4262-9114-bbf04f218305)
*FOTO: Brayan Martins / Agência Preview*

Um recurso que está se popularizando agora na comunidade do Framework Angular é o [Ivy](https://angular.io/guide/ivy). Como demonstrado pela Keila Menezes, o Ivy é a nova engine Opt-in da versão 8.x do Angular.
> Geração de bundles otimizados (tree shaking), compilações mais rápidas, melhor debugging, carregamento de módulos dinamicamente (lazy loading) e HOCs é o que promete o Ivy para essa nova versão do Angular, para competir com React e Vue.

## GraphQL + Apollo Server + Azure Functions = Magic

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FtXtb1Fl.jpg?alt=media&token=d17a90c7-bc30-403c-9275-3354d10f293a)
*FOTO: Brayan Martins / Agência Preview*

O GraphQL, tecnologia desenvolvida pelo facebook surgiu como alternativa ao modelo de requisição Rest (baseada no conceito de Queries, Mutations e Subscriptions). Essa tecnologia entrega algumas vantagens que proporcionam um desenvolvimento mais rápido de serviços de API, facilita a vida tanto do front-end, quanto do backend.

Abaixo, um exemplo de query feita solicitando as postagens de um usuário e seus dados.

```graphql
{
  user {
    name,
    email
    post {
      id,
      title,
      text
    }
  }
}
```

Esse é o resultado:

```json
{
  "data": {
    "user": {
      "name": "R2-D2",
      "email": "r2d2@starwars.com",
      "post": [
        {
          "id": 1
          "title": "A New Hope"
          "text": "In a galaxy..."
        },
        {
          "id": 1
          "title": "A New Hope"
          "text": "In a galaxy..."
        }
      ]
    }
  }
}
```

O palestrante Erick Wendel trouxe uma demonstração de uma construção simples e rápida de uma API utilizando [GraphQL](https://graphql.org/), o client/server [Apollo](https://github.com/apollographql), com deploy na [Azure](https://azure.microsoft.com) Cloud.

## Criamos um site de comércio eletrônico com o AMP

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2F8YRso9k.jpg?alt=media&token=972f8cb4-065b-4c48-b7a9-2643721c347d)
*FOTO: Brayan Martins / Agência Preview*

Ben Morss trouxe a conferência uma apresentação de uma loja online criada usando a tecnologia [AMP](https://amp.dev/).

O recurso mais comentado dessa tecnologia é a **velocidade** de carregamento, usando **componentes** dessa biblioteca para carregar conteúdo cacheado em servidores. Como apresentado, atualmente 40% das conexões, atualmente são feitas via tecnologia 2G, o que reforça ainda mais a importância de um recurso como este.

Os benchmarks apresentados foram superiores ao próprio cache do dispositivo do usuário, pois a página amp é pre-carregada ao entrar nos resultados de pesquisa do Google.

AMP traz alguns componentes para acelerar o desenvolvimento, assim como muitas frameworks, abaixo um exemplo:

```html
<html>
<head>
  <title>AMP Website Demo</title>
</head>
<body>

  <h2>AMP is easy</h2>

  <amp-carousel type="slides"
                width="400"
                height="300"
                layout="responsive"
                lightbox>
    <amp-img src="https://unsplash.it/400/300?image=10"
             width="400"
             height="300"
             layout="responsive"
             alt="a sample image">
    </amp-img>
    <amp-img src="https://unsplash.it/400/300?image=11"
             width="400"
             height="300"
             layout="responsive"
             alt="a sample image">
    </amp-img>
  </amp-carousel>

  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>

</body>
</html>
```

Conheça mais sobre AMP no site oficial: [amp.dev](https://amp.dev/)

## O front-end como você conhece vai morrer

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2Far89XoY.jpg?alt=media&token=4053b4cf-5818-4589-bf32-917e37e1ea0a)
*FOTO: Brayan Martins / Agência Preview*

Carla vieira trouxe o tema mais “chocante”, que acabou tornando-se uma espécie de clickbait. O fim do front-end, como existe hoje.

Ela começou apresentando um pouco da história até chegarmos até a Web 4.0 e em seguida apresentou ferramentas de inteligência artificial em fase de desenvolvimento e testes que auxiliam nas atividades mecânicas de um profissional de front-end.

O exemplo de maior destaque foi uma ferramenta que converte um desenho de mockup de um website para HTML e uma ferramenta de autocomplete de código, que tenta “adivinhar” sugerindo o código para o desenvolvedor.

## Fora do segmento principal: Web Workers and WorkerDOM

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FqQIYcO2.jpg?alt=media&token=ae41b645-3f04-4ca9-972b-ad631b36ce5b)
*FOTO: Brayan Martins / Agência Preview*

O Javascript é uma linguagem que roda no browser e é single thread. Os web workers surgiram para contornar esse problema. Como trazido pelo Filip Stanis, do Google, podemos definir um web worker como:

> Um Web Worker é um código JavaScript executado em segundo plano, independentemente de outros scripts, sem afetar o desempenho da página. Você pode continuar fazendo o que quiser: clicando, selecionando itens etc., enquanto o assistente da Web é executado em segundo plano.

A implementação de um web woker é relativamente simples, como no exemplo abaixo:

```html
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button> 
<button onclick="stopWorker()">Stop Worker</button>

<script>
var w;

const startWorker = () => {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>
```

Abaixo a implementação do timeout.

```javascript
// demo_workers.js

var i=0;

function timedCount() {
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();
```

Web worker já está disponível para os browsers de forma nativa, bem como sua API pode ser consultada [neste link](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). Veja as versões dos navegadores com esta tecnologia implementada [aqui](https://caniuse.com/#feat=webworkers).

## Sobreviver à morte pela complexidade

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FFXpeBMW.jpg?alt=media&token=3abae40d-e996-4abd-9d24-3c690c240b72)
*FOTO: Brayan Martins / Agência Preview*

Organizar e facilitar a manutenção de código de uma aplicação, durante seu desenvolvimento ao longo do tempo é uma tarefa difícil e algumas alternativas para auxiliar nesse processo foram tema da apresentação do Mattias Johansson.

Mattias trouxe 4 alternativas:

* Mantenha seu código minimalista, sem features desnecessárias e valide profundamente tudo que realmente precisa ser adicionado na aplicação.

* Remova funcionalidades que são pouco utilizadas pelos usuários (isso pode deixar alguns usuários chateados).

* Mate o seu produto e crie outro com funcionalidades semelhantes, mas otimizando e removendo o desnecessário, oferecendo uma nova experiência de uso.

## Direção de arte com recursos completos para a Web

![FOTO: Felipe Nogs / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FYISIrI0.jpg?alt=media&token=d4226247-eb51-420a-a3df-a0d3645ee6ba)
*FOTO: Felipe Nogs / Agência Preview*

Mina Markham trouxe de forma simples, alguns modelos de construção de design system para aplicações, focados no idioma e localização do usuário.

Ela mostrou como é importante desenvolver produtos que se adaptem à cultura do usuário que está utilizando.

Um case de trabalho demonstrado foi o do slack, que manipula disposição e forma do design system de formas completamente diferentes por exemplo, para os EUA e o Japão, inclusive traduzindo nome dos usuários.

Para comparação:

* [Slack Japão](https://slackhq.com/slack-in-japan)

* [Slack USA](https://slackhq.com/)

## Conditional Modules & Dynamic Bundling, A Netflix Original

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FtWWxqvM.jpg?alt=media&token=fc6937c7-76a7-4e5f-a189-ac6abc560a8c)
*FOTO: Brayan Martins / Agência Preview*

Rajat Kumar veio direto da Netflix para nos mostrar a forma como a empresa gera o bundle da aplicação de forma dinâmica, usando módulos condicionais.

Com o padrão utilizado por eles, usando Js, é possível gerar múltiplos bundles para diversos tipos de dispositivos, até mesmo para usuários diferentes.

Essa geração de bundle é utilizada na execução dos milhões de casos de teste A/B da netflix. Cada combinação de possibilidade gera um bundle específico no momento que o usuário faz a requisição para o servidor.

## Internacionalização na Web

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FTilfRuc.jpg?alt=media&token=00b62bac-c68e-45f5-80f8-695b1e9ba02b)
*FOTO: Brayan Martins / Agência Preview*

Visando integração e acessibilidade na web, Leo Balter apresentou soluções práticas para a tradução e internacionalização, como o uso do objeto Intl, que é o namespace para a API de Internacionalização do ECMAScript, o qual fornece de forma simples formatações de números, valores e datas para uma região especificada.

Ambos projetos e ferramentas você pode encontrar em:

* [i18n](https://github.com/mashpie/i18n-node)

* [Intl](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl)

* [Globalize](https://github.com/globalizejs/globalize)

## Criando API’s Escaláveis com Node.js & Serverless

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2Fln6ql8K.jpg?alt=media&token=5242dc53-424f-416b-9505-069828d41399)
*FOTO: Brayan Martins / Agência Preview*

Glaucia Lemos trouxe à conferência um pouco do conceito e prática de Serverless, demonstrando vantagens e desvantagens.

Ela demonstrou um exemplo prático de uma API (CRUD) usando nodeJS e com deploy automatizado para a azure cloud. Deu para constatar que realmente é bem simples de construir exemplos básicos e efetuar o deploy instantâneo para nuvem usando o terminal.

Com o terminal aberto e logado na azure account, basta digitar o comando abaixo para criar uma nova function.

```bash
func new --name mySoloFunction --template "HttpTrigger"
```

E para executar:

```bash
func start
```

Atualmente as empresas que lideram esse segmento de cloud são: Google Cloud, Amazon AWS e Azure Cloud.

O exemplo criado por ela está disponível [neste link](https://github.com/glaucia86/frontend-bootcamp-online).

## Take your application to the web with WebAssembly

![FOTO: Brayan Martins / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FfzBqzjg.jpg?alt=media&token=99bb6b5e-1f1a-4036-88bf-7d8ba627eb27)
*FOTO: Brayan Martins / Agência Preview*

O venezuelano Miguel Useche apresentou alguns dos recursos e funcionamento da tecnologia WebAssembly que visa executar o código na velocidade nativa, aproveitando os recursos comuns de hardware disponíveis em uma ampla variedade de plataformas.

A programação é feita em baixo nível e está disponível para testes usando as linguagens C e Rust. É possível utilizar o navegador para programar [neste link](https://webassembly.studio/).

O site oficial do WebAssembly é [este](https://webassembly.org/).

## Ivy Renderer for Dummies

![FOTO: Felipe Nogs / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FuP9vH9b.jpg?alt=media&token=a7c7eb02-a360-41d3-b917-58e3cb912eee)
*FOTO: Felipe Nogs / Agência Preview*

Gerard Sans trouxe com um pouco mais de detalhe alguns dos novos recursos da nova engine do Angular 8.x, abordado anteriormente pela Keila Menezes, porém dessa vez focando em geração de bundle e compilação.

Em alguns testes, ele demonstrou um ganho de mais de 70% de tamanho do bundle gerado em uma aplicação usando esta tecnologia.

Mais informações em: [Ivy](https://angular.io/guide/ivy)

## Mozilla, Open Source, Voz, e Inteligência Artificial

![FOTO: Felipe Nogs / Agência Preview](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/braziljs%2FZuyAixF.jpg?alt=media&token=8c2863a5-7cab-485f-9dd0-f90b623c4639)
*FOTO: Felipe Nogs / Agência Preview*

Com o cada vez mais presente assistente de voz, como o Google Assistant, a Siri e a Alexa, André Natal trouxe grandes nóticias sobre os avanços no projeto ***Web Speech API*** da Mozilla, que propõe facilitar e prover ferramentas para o suporte e integração do reconhecimento de voz em aplicações web.

André apresentou a ferramenta falando sobre o progresso no desenvolvimento da mesma, que deve ter expressivos lançamentos no final do ano, e explicou como essas tecnologias podem prover aos aplicativos web uma experiência única, com maior interação, versatilidade e autenticidade.

Um pouco mais sobre isso pode ser encontrado [aqui](https://searchengineland.com/voice-assistant-usage-now-at-critical-mass-as-google-assistant-crowned-smartest-320798) e [aqui](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

Segue abaixo, link para as fotos:

* [Primeiro dia](https://www.facebook.com/pg/braziljs/photos/?tab=album&album_id=2527375660675690)

* [Segundo dia](https://www.facebook.com/pg/braziljs/photos/?tab=album&album_id=2529072373839352)

Obrigado a [Softbox](https://softbox.com.br) por ter proporcionado a oportunidade de participar do evento.

<!-- I’d love to hear from you on Twitter! Thanks for reading. -->
