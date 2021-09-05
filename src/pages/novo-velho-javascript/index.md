---
title: Ecmascript 6 — O velho novo Javascript
date: '2020-11-22'
spoiler: ES6 foi lançado com diversas funcionalidades que vieram para aumentar de forma exponencial a produtividade no desenvolvimento…
tags: javascript, es6
published: true
---

Em meados de 2015, foi lançada uma nova versão do Javascript, o **ECMAScript 6 (ES6)** ou **ECMAScript 2015 (ES2015)** com diversas funcionalidades que vieram para aumentar de forma exponencial a produtividade no desenvolvimento.

O ano de 2015 pode parecer longe no passado, quando falamos de tecnologia, mas ainda existe muito código legado de versões anteriores do Javascript por aí, então é um assunto que ainda vale muito a pena ser explorado.

São muitas novidades e para não se tornar uma leitura cansativa, vou focar nos pontos que mais trouxeram ganhos de produtividade e confiabilidade no código desenvolvido.

## 1. Variáveis e constantes

Nessa nova implementação, os conceitos de armazenamento de dados da aplicação respeitam o escopo onde elas são definidos. O uso do **var** para declaração de variáveis é desaconselhado, sendo substituido por [**let**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) e [**const**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

```javascript
// formato não recomendado
var nomeAntigo = 'Lando';

// declarando uma constante
const nome = 'Han Solo';

// declarando uma variável
let anoNascimento = 1973;

// declarando uma variável dentro de um escopo de função
function calcularIdade(anoNascimento) {
    const anoAtual = 2020;
    
    return anoAtual - anoNascimento;
}
```

Não é possível alterar o valor de uma constante após o valor inicial definido, a tentativa retorna um erro (é possivel e não recomendado, alterar o valor de propriedades de um objeto definido com **const**).

## 2. Arrow functions

Uma grande vantagem da utilização de [**arrow functions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) é a redução de tamanho de código, principalmente quando executado em larga escala, com diversas funções encadeadas.

```javascript
// declarando uma funcao antes do ES6
const calcularSoma = function (a, b) {
    return a + b;
};

// utilizando arrow function
const calcularSoma = (a, b) => {
    return a + b;
};

// forma resumida (return e chaves implícito)
const calcularSoma = (a, b) => a + b;
```

É importante deixar claro que a declaração de **function** não foi descontinuada ou desincentivada, as **arrow functions** vieram para complementar, com uma forma mais ágil de escrever.

## 3. Map, filter e reduce para arrays

Foram criadas 3 funções embutidas para facilitar o trabalho de **operações em arrays**, com 3 diferentes focos. Nos exemplos abaixo, vou citar com exemplos a funcionalidade de cada um.

Vamos usar o [**.map()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) para resgatar o ID de cada usuário de uma lista de usuários. Essa função vai percorrer cada item de um **array** e retornar exatamente o mesmo numero de elementos do array origem.

```javascript
const usuarios = [
    { id: 10, name: 'Luke' },
    { id: 15, name: 'Leia' },
    { id: 20, name: 'Ackbar' },
];

const usuariosIds = usuarios.map(usuario => usuario.id);

// resultado será: [10, 15, 20]
```

Nesse próximo exemplo, vou utilizar [**.filter()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) para, veja bem… **FILTRAR** os elementos de uma lista. Essa função vai percorrer cada item de um array e retornar um novo array com os elementos filtrados do array original.

```javascript
const usuarios = [
    { name: 'Luke', idade: 25 },
    { name: 'Leia', idade: 26 },
    { name: 'Ackbar', idade: 300},
];

const usuariosIds = usuarios.filter(usuario => usuario.idade > 30);

// resultado será: [{ name: 'Ackbar', idade: 300}]
```

E por fim, o [**.reduce()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). Essa função vai percorrer cada elemento de um array para retornar um único valor decorrente de alguma operação em cada elemento.

```javascript
const array = [1, 2, 3, 4];

const soma = array.reduce((total, elemento) => total + elemento);

// resultado será: 10
```

O argumento das funções **.map()**, **.filter()**, **.reduce()** é uma função.

## 4. Parâmetros padrão

Agora é possível definir um [**valor padrão**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) para os argumentos de funções, o que pode facilitar o desenvolvimento em alguns casos.

```javascript
// antes do ES6
function soma(a, b, c) {
    if (c == null) {
    c = 0;
    }

    return a + b + c;
}

// com ES6
function soma(a, b, c = 0) {
    return a + b + c;
}
```

## 5. Operador spread

O [**operador spread**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) (…) nova funcionalidade no ES6 dá a possibilidade de realizar operações em **arrays** e **objects** sem necessidade de realizar uma iteração em cada um de seus valores.

```javascript
// utilizando spread como argumento de uma função
function soma(...argumentos) {
    let total = 0;

    for (let i = 0; i < argumentos.length; i++) {
    total += argumentos[i];
    }

    return total;
}

soma(1, 2);
soma(1, 2, 3);

// utilizando spread para unir dois arrays
const lista1 = [1, 2, 3, 4];
const lista2 = [5, 6, 7, 8];

// listaResultado será: [1, 2, 3, 4, 5, 6, 7, 8];
const listaResultado = [...lista1, ...lista2];

// também é possível usar com objetos
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// objResultado será:{a: 1, b: 2, c: 3, d: 4}
const objResultado = {...obj1, ...obj2};
```

## 6. Template string

Com a implementação do [**template string**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) é possível definir valores de string concatenando variáveis e operações de forma simples e o código fica **mais legível**, além de ser muito mais rápido de escrever, visto que não é necessário se preocupar com os concatenadores **(+)**.

```javascript
const nome = 'Vader';
const anoNascimento = 1977;
const empresa = 'Death Star';

// antes do ES6
const frase = 'O ' + nome + ' tem ' + (2020 - anoNascimento) + ' e trabalha na empresa ' + empresa + '.';

// com ES6
const frase = `O ${nome} tem ${2020 - anoNascimento} e trabalha na empresa ${empresa}.`;
```

A template string suporta **multi-line**, ou seja, a string pode ter várias linhas sem necessidade de um caractere **(+)** no fim de cada linha informando a quebra.

## 7. **Destructuring assignment**

O recurso de [**destructuring**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) agiliza a utilização de propriedades de objetos e valores de listas, como variáveis. Fica mais fácil de entender no exemplo abaixo:

```javascript
const aluno = {
    nome: 'Padme',
    email: 'padme@secondtrilogy.com',
    idade: 23,
    cidade: 'Tikal',
};

// antes do ES6
var nome = aluno.nome;
var email = aluno.email;
var idade = aluno.idade;
var cidade = aluno.cidade;

// com ES6
const { nome, email, idade, cidade } = aluno;
```

Com a definição acima, as informações **nome, email, idade, cidade** podem ser usadas como variáveis no código a seguir.

## 8. Property Shorthand

Você pode agora inializar um objeto, sem precisar definir chave e valor para cada propriedade utilizando o [**property shorthand**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015). Émais uma forma de agilizar e diminuir o tamanho do código. Vamos para o exemplo:

```javascript
// antes do ES6
function cadastrarProfessor(nome, email, telefone) {
    var professor = {
        nome: nome,
        email: email,
        telefone: telefone,
    };

    cadastrar(professor);
};

// com ES6
function cadastrarProfessor(nome, email, telefone) {
    var professor = {
        nome,
        email,
        telefone,
    };

    cadastrar(professor);
};
```

A diferença do segundo para o primeiro caso é sutil, as propriedades do objeto professor podem omitir o valor, deixando apenas a chave.

PS.: As duas opções acima são válidas no ES6, a segunda é apenas uma alternativa de escrita.

## 9. Modules

Permite [**importar/exportar**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) valores sem a necessidade de declaração deles em nível global dentro da aplicação.

Exemplo: nesse arquivo abaixo, **operacoes.js**, são declarados 2 funções e são exportadas para serem usadas em outros escopos.

```javascript
function soma (a, b) {
    return a + b;
};

function multiplicacao (a, b) {
    return a * b;
};

export {
    soma,
    multiplicacao,
};
```

Essas funções podem ser chamadas em outros arquivos, como no exemplo abaixo do arquivo **main.js**.

```javascript
import { soma } from './operacoes.js';

soma(3, 2);
```

## 10. Promises

Um dos principais motivos para criação das [**promises**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) foi a necessidade de desenvolver um código mais limpo e organizado quando trabalhamos com **operações assíncronas**. Um famoso problema encontrado em muitos códigos javascript é o [**callback hell**](http://callbackhell.com). As promises são uma proposta de resolução para esse problema.

No exemplo abaixo, vou efetuar uma requisição à API da minha aplicação para buscar os usuários cadastrados, dividindo a responsabilidade de um método exclusivo para o tratamento da requisição.

```javascript
function getUsers() {
    return new Promise((resolve, reject) => {
    fetch('api/getUsers'/)
        .then(resposta => resolve(resposta.json())
        .catch(erro => reject(error);
    });
};

// utilizando a funcao acima
getUsers()
    .then(usuarios => console.log(usuarios))
    .catch(erro => console.log(erro.message));
```

## Compatibilidade

A compatibilidade do ES6 com navegadores é bastante ampla e para os casos em que não é possível, a utilização de compiladores, como [**babel.js**](https://babeljs.io/) é recomendada. No link abaixo tem algumas informações sobre compatibilidade.

[https://www.w3schools.com/js/js_versions.asp](https://www.w3schools.com/js/js_versions.asp)

## Referência

Para construção desse artigo foram usadas informações disponibilizadas no site [**es6-features.org**](http://es6-features.org/#Constants), que traz todas as novas funcionalidades implementadas no ES6.

*Espero que essa leitura possa ter ajudado. 🚀*

*Até mais.*
