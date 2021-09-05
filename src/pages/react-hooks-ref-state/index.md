---
title: React Hooks - Ref e State
date: '2021-06-16'
spoiler: Aplicação de dois dos principais hooks do Reactjs
tags: javascript, reactjs, hooks
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/react-hooks%2Freact-hooks.jpg?alt=media&token=02d450a8-7968-4973-9069-27c1a5c4914a)

Pessoal, nesse post vou abordar mais um pouco sobre os [React Hooks](https://reactjs.org/docs/hooks-intro.html). Nós vamos observar os casos de uso dos hooks **useRef, createRef, useState e useReducer**.

Os hooks nos permitem utilizar estado e outros recursos do react como memoization, ciclo de vida do componente etc sem a necessidade de criar o componente como uma classe.

Nesse post abaixo, eu mostrei um pouco sobre a parte de memoization com o useMemo.

## React Ref

Vamos começar com o `ref`. Podemos utilizar o hook `useRef` para acessar os elementos DOM do HTML.

No exemplo abaixo, vamos o usar o hook para que quando o botão for clicado, o campo de input seja focado para digitação.

```react
import React, { useRef } from "react";

export default App = () => {
  const ref = useRef(null);

  const onClick = () => {
    ref.current.focus();
  };

  return (
    <div className="App">
      <h1>Utilizando useRef</h1>
      <input ref={ref} type="text" />
      <button onClick={onClick}>Focar no campo</button>
    </div>
  );
}
```

O `useRef` foi criado com objetivo de ser uma proposta de hook como alternativa ao [createRef](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs). O `createRef` é uma API do React que desempenha o mesmo papel.

Nesse exemplo abaixo, eu utilizei o mesmo código do exemplo anterior, porém desta vez criando a referencia com o `createRef`. O resultado será o mesmo.

```react
import React, { createRef } from "react";

export default App = () => {
  const ref = createRef(null);

  const onClick = () => {
    ref.current.focus();
  };

  return (
    <div className="App">
      <h1>Utilizando useRef</h1>
      <input ref={ref} type="text" />
      <button onClick={onClick}>Focar no campo</button>
    </div>
  );
}
```

Uma diferença entre essas duas funcionalidades é que o useRef 
cria a referência apenas uma vez, logo quando o componente é renderizado. Já o createRef cria uma nova referência para o elemento toda vez que ocorre o re-render do componente, sendo assim menos performático.

## React State

O próximo hook que vamos ver é uma solução para gerenciamento de estado do componente, o **useState**.

Nesse exemplo abaixo, é possível armazenar no estado do componente, o número de vezes que o botão foi clicado.

```react
import React, { useState } from 'react'
 
export default App = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
       Você clicou {count} vezes!
      <button onClick={() => setCount(count + 1)}>
        Mais um!
      </button>
    </div>
  )
}
```

O `useState(0)` é uma função e seu parâmetro é o valor inicial do estado que você quer gerenciar, nesse caso a contagem. Já essa primeira parte `[count, setCount]` com o array de variáveis utiliza uma funcionalidade do Js, o [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) , que é retornada pelo useState.

O primeiro elemento `count` é uma variável com o valor atual do estado e o segundo elemento `setCount` é a função que altera o valor do estado.

## Reducer

O [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) é mais um hook criado para componentes de classe. Este com o propósito também de gerenciamento de estado de componente, mas com uma abordagem para casos em que o gerenciamento dos dados é mais complexo.

Nesse exemplo abaixo (retirado da documentação do react), vou utilizar uma função de contador com as opções de incrementar e decrementar o valor.

```react
const initialState = { count: 0 };

const reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error('Operador não implementado');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Contador: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

Em casos que o estado é mais simples, é recomendada a utilização do useState, por ser mais simples de implementar e gerenciar.

---

Este post não seria possível sem o trabalho de pesquisa e discussão do time do capítulo de frontend do LuizaLabs.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀

Até mais.
