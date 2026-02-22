---
title: React context
date: '2021-04-04'
spoiler: Compartilhamento de estado entre componentes no Reactjs
tags: javascript, reactjs
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/react-context%2Fcontext-0.png?alt=media&token=ecd6c6d4-9509-47c5-aa18-74c342afaa47)

# O que é?

React context foi criada com intuido de compartilhar dados que podem ser considerados como "dado global" para uma árvore de componentes.

É necessário usar com cuidado, pois isso pode tornar o componente menos utilizável.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/react-context%2Fcontext-1.png?alt=media&token=c31f0689-9c5c-40e4-8d80-b9e55779e6e6)
Image by [modus create](https://moduscreate.com/blog/react-context-api-state-management)

# Por que precisamos da API React context?

Por vezes precisamos acessar uma mesma informação em diferentes componentes em diferentes níveis de uma árvore, como por exemplo: tema da aplicação, linguagem selecionada, dados de autenticação/usuário.

Utilizando esta API, você não precisa passar essas informações via props dentre toda a árvore de componentes da aplicação.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/react-context%2Fcontext-2.jpeg?alt=media&token=f0ca3b3d-8ee1-45c3-82d3-c4fd8ff84a19)

Outra utilidade dessa API é a atualização destes dados, já que não é possível atualizar props nos componentes pais, pelos componentes filhos.

# Como utilizar

A lógica do React Context é baseada em 2 conceitos: PROVIDER e CONSUMER. Provider é o componente que recebe os dados e gerencia o armazenamento das informações, já o Consumer é o componente que, veja bem, consome os dados.

Veja abaixo um exemplo. Nesse primeiro momento será criado o store que vai gerenciar os dados.

```javascript
const ThemeContext = React.createContext(null);
```

Agora temos o componente pai que é o provider.

```javascript

function App() {
  const defaultTheme = "light";
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Body />
    </ThemeContext.Provider>
  );
}

```

Um dos componentes filhos que está acessando o dado salvo, como o a variavel `theme` por exemplo.

```javascript
function Header() {
  const { theme } = useContext(ThemeContext);
  const style = themeStyle[theme];

  return (
    <div>
      <div className="header" style={{ ...style.background, ...style.text }}>
        Death Star
      </div>
    </div>
  );
}
```

Por fim, o componente filho que altera o contexto em todos esses componentes dessa árvore utilizando a função `setTheme`, enviando o parâmetro de tema.

```javascript

function Body() {
  return (
    <ThemeContext.Consumer>
      {({ setTheme }) => {
        return (
          <div className="body">
            <button type="button" onClick={() => setTheme("light")}>
              Tema claro
            </button>
            <button type="button" onClick={() => setTheme("dark")}>
              Tema escuro
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  );
}

```

O exemplo completo e funcional no codesandbox pode ser acessado [nesse link](https://codesandbox.io/s/react-context-j71fo).

# React Context vs Redux

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/react-context%2Fcontext-3.jpeg?alt=media&token=566a35bc-e7bb-4fad-a718-e3b497bd89c3)
image by [Weekly WebTips](https://medium.com/weekly-webtips/state-management-reacts-context-api-vs-redux-f308e73b495)

Escolher entre um e outro é uma decisão de projeto. A forma como você trabalha vai determinar qual é melhor para seu cenário.

O fato é que a maior desvantagem do Redux é a quantidade de código que é necessário escrever para projetar pequenos gerenciamentos de estado, bem como a complexidade da curva de aprendizado para implementação.

Um argumento do outro lado é que o Redux por ser mais declarativo deixa o gerenciamento de estado mais documental.

---

Este post não seria possível sem o trabalho de pesquisa e discussão do time do capítulo de frontend do LuizaLabs.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀

Até mais.
