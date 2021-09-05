---
title: Performance com Memo e useMemo
date: '2021-03-24'
spoiler: Dicas de performance para seus componentes escritos em React
tags: javascript, reactjs
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/performance-memo-usememo%2Fldtjgqywjvmpeqi2tg0o.png?alt=media&token=3d5d1c63-a46a-4022-80dd-ed2475863843)

No desenvolvimento com React, por vezes vemos a necessidade de melhorar a performance da aplicação, utilizando técnicas de cache de nossos componentes.

Antes de atualizar o DOM, o React primeiro renderiza o componente. Feito isso, ele compara o resultado da renderização com a anterior. Se os resultadores forem diferentes, ele o atualiza.

# React Memo

É ai que entra a vantagem de utilização do [React.memo()](https://reactjs.org/docs/react-api.html#reactmemo). Quando utilizamos o `memo`, o React memoriza o resultado do componente. Antes de o React renderizar o componente novamente, ele valida se os props (primitivos) são os mesmos, em caso positivo ele pula a renderização.

Veja abaixo um exemplo da utilização do [React.memo()](https://reactjs.org/docs/react-api.html#reactmemo) na prática.

```javascript
import React, { memo, useState } from "react";
import ReactDOM from "react-dom";

const ComMemo = memo(props => {
  console.log("Estou renderizando com memo!");
  return <h3>{props.message}</h3>;
});

const SemMemo = props => {
  console.log("Estou renderizando sem memo!");
  return <em>{props.message}</em>;
};

const MyApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Memo</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <ComMemo message="Este componente só renderiza uma vez." />
      <SemMemo message="Este componente vai renderizar a cada mudança de estado." />
      <p>Dá uma olhada no console!</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);
```

Você pode conferir o exemplo funcionando no codesandbox, [aqui](https://codesandbox.io/s/react-memo-hc5o8).

# useMemo

O useMemo é um hook que utiliza uma técnica chamada memoization. Esse hook recebe 2 parâmetros: a função que deseja memoizar e um array de variáveis que, quando alteradas, atualizam a função.

Veja abaixo um exemplo do useMemo em ação:

```javascript
import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";

const Error = (props) => {
  const { active } = props;
  const message = "Mínimo de 8 caracteres";

  console.log("Componente de erro renderizando");

  return active && message;
};

const MyApp = () => {
  const [password, setPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handlePasswordChange = (event) => {
    const { value } = event.target;

    setShowErrors(value.length < 8);
    setPassword(value);
  };

  const memoizedErrors = useMemo(() => {
    return <Error active={showErrors} />;
  }, [showErrors]);

  return (
    <form>
      <h1>Cadastrar uma senha</h1>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit">Salvar</button>

      <p>{memoizedErrors}</p>
      <p>Dá uma olhada no log!</p>
    </form>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
```

Você pode observar que neste exemplo o componente de erro só precisa ser renderizado novamente quando a mensagem for mostrada ou escondida.

Você pode conferir o exemplo funcionando no codesandbox, [aqui](https://codesandbox.io/s/usememo-jrgb3).

# React.memo() vs useMemo

As duas funcionalidades tem o mesmo comportamento e a diferença é uma questão de conceito.

React.memo() é um [higher-order component](https://reactjs.org/docs/higher-order-components.html) que envolve componentes que renderizam apenas quando suas props são alteradas. Já o useMemo é um [react hook](https://reactjs.org/docs/hooks-intro.html) que envolve funções para garantir que elas sejam renderizadas apenas quando o array de dependências for alterado.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/performance-memo-usememo%2Fflapvhuxh8ziwvgjw3mv.jpg?alt=media&token=1683b178-e7ff-4043-9edb-698e32633ef1)

Enfim... Existem casos em que você pode escolher utilizar um dos recursos acima. O importante é observar quando você realmente precisa resolver um GAP de performance e quando esses recursos não vão entregar muito resultado ou até mesmo impedir o correto funcionamento. Para isso, é importante colocar na prática.

---

Este post não seria possível sem o trabalho de pesquisa e discussão do time do capítulo de frontend do LuizaLabs.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀

Até mais.
