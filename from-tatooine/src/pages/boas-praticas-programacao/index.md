---
title: 👨‍💻 Boas práticas de programação
date: '2021-01-04'
spoiler: Nesse post vou abordar alguns pontos que reuni sobre boas práticas de programação
tags: javascript, programacao, cleancode
published: true
---

Olá pessoal, nesse post vou abordar alguns pontos que reuni sobre boas práticas de programação simples, que tive a oportunidade de aprender e que podem ser incorporadas no fluxo de desenvolvimento para tornar seu código mais seguro e confiável.

Não vou focar tanto em aspectos técnicos e teóricos de livros como o **clean code**. Para um aprofundamento maior sobre conceitos, recomendo fortemente a leitura do [livro](https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675). Você pode ainda buscar alguns outros artigos e vídeos que possam resumir os princípios base.

Por ter mais familiaridade, vou utilizar exemplos com a linguagem Javascript, porém todos os pontos abordados nesse artigo servem para qualquer linguagem de programação.

Vamos direto ao assunto.

![Alt Text](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/boas-praticas-programacao%2Fclean-code-1.png?alt=media&token=3361fd26-dd5d-491b-ad14-d0514f5b3262)

Imagem de: [https://www.geeksforgeeks.org/7-tips-to-write-clean-and-better-code-in-2020/](https://www.geeksforgeeks.org/7-tips-to-write-clean-and-better-code-in-2020/)

### 1. Atenção ao padrão

Você pode se encontrar em dois cenários diferentes. Vou torcer para que seja a segunda opção.

Primeiro cenário: você está mantendo um projeto legado. Siga os padrões de implementação que foram criados até o momento, como nomenclatura de arquivos e pastas, idioma de variáveis, tabelas de bancos de dados, até mesmo cores e fontes.

Caso você esteja começando um projeto novo, tenha em mente que o momento dessas definições de padrão é fundamental para você seguir com solidez no desenvolvimento até a entrega e vai ajudar muito todos os membros da equipe a seguir o desenvolvimento com menos dependencia.

Se você está começando um projeto e não tem autonomia para definir essas regras, porém percebeu que está faltando. Essa é sua oportunidade de apresentá-las.

### 2. Nomenclatura

Os pequenos detalhes importam. Padronização semântica e sintática de arquivos, variáveis, métodos, classes etc em qualquer linguagem aumentam muito a produtividade. 

**Escreva nomes que deem significado ao código.**

Se você olhar para o código sentir que dá para entender exatamente o que está acontecendo sem precisar escrever comentários, sua missão foi cumprida.

Dá uma olhada nesse exemplo:

```jsx
// código sem padrão
function executar(param1, param2) {
    const resposta = passo1(param1);

    if (resposta === false) {
        return passo2(param1, param2)[mensagem];
    } else{
        return 'Não foi possível cadastrar usuário';
    }
}

// código com padrão
function cadastrarUsuario(email, senha) {
    const existe = existeEmailCadastrado(email);

    if (existe === true) {
        return 'Este email já tem cadastro no sistema';
    } else {
        const usuarioCriado = salvar(email, senha);

        return usuarioCriado.mensagem
    }
}
```

No primeiro trecho de código é muito difícil entender o código sem debugar, já no segundo, uma simples leitura permite entender todo o código.

### 3. Cada coisa no seu lugar

Quando pensamos em desenvolvimento ágil é fundamental derrubar barreiras. Uma delas é quando um novo desenvolvedor começa a manter um projeto que não possui padronização de projeto.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/boas-praticas-programacao%2Fclean-code-2.jpeg?alt=media&token=ea3334d0-71c5-4a80-bd4f-49348c90fd84)

Quando um projeto está sistematizado é muito fácil desenvolver novas funcionalidades e corrigir bugs. Você precisa alterar uma consulta SQL? Alterar um parâmetro de sistema? Adicionar uma nova propriedade numa classe? **Você sabe exatamente em que pasta vai encontrar**.

### 4. Código limpo

Acredito que este é o ponto mais fácil dessa lista. **Remova código comentado ou que não seja utilizado pela aplicação.** Mantenha a prática de sempre revisar o código antes fazer um novo commit?

Quando revisar seu código, verifique também se existem anotações de impressão de log desnecessários na aplicação (console.log no JS, system.out.print ou logger no Java). Essas anotações de log desnecessárias poluem o log da aplicação e dificulta a validação de problemas reais.

```jsx
// remova variaveis nao utilizadas
const variavelNaoUtilizada;

// remova metodos nao utilizados
function funcaoNaoUtilizada(a, b) {
    return a + b;
}

// remova logs irrelevantes
function funcaoGenerica(params) {
    console.log('Entrou na funcao...', params);
}
```

Alguns editores de texto como o [vscode](https://code.visualstudio.com) ajudam a identificar código não utilizado marcando esses blocos com uma cor mais clara.

### 5. Reutilizar

Assim como no meio ambiente, a prática de reutilização traz muitos benefícios a longo prazo. **Código duplicado é uma prática que abre brechas para muitos bugs e gera muito retrabalho.**

Como escrever um código mais reutilizável? Uma forma de *simplificar* essa mentalidade é pensar em responsabilidade. Seu código, suas funções, classes e métodos precisam ter o mínimo ou apenas uma única *responsabilidade*.

```jsx
function cadastrarUsuario(email, senha) {
    const existe = existeEmailCadastrado(email);

    if (existe === true) {
        return 'Este email já tem cadastro no sistema';
    } else {
        const senhaHash = hash(senha)
        const usuarioCriado = salvar(email, senhaHash);

        return usuarioCriado.mensagem
    }
}

function recuperarSenha(email, senha) {
    const existe = existeEmailCadastrado(email);

    if (existe === false) {
        return 'Este email não tem cadastro no sistema!';
    } else {
        const senhaHash = hash(senha)
        const usuarioAlterado = atualizar(email, senhaHash);

        return usuarioCriado.mensagem
    }
}
```

Veja que no exemplo acima, as funções **hash** e **existeEmailCadastrado** foram utilizadas em lugares diferentes com objetivos diferentes. A reutilização evitou que todo o processo executado dentro dessas duas funções fosse escrito dentro dos métodos **recuperarSenha** e **cadastrarUsuario**.

### 6. Use linters

Seguir padrões de projeto não é fácil, por isso é fundamental utilizar um linter para "vigiar" o seu código e te alertar sobre as práticas recomendadas e o que você deixou pra trás.

Alguns exemplos de linters: Javascript com [ESLint]([https://eslint.org](https://eslint.org)), Java com [SonarLint]([https://www.sonarlint.org](https://www.sonarlint.org)), Python com [Pylint]([https://pypi.org/project/pylint](https://pypi.org/project/pylint)).

https://davidwalsh.name/eslint

### 7. Indentação

Em algumas linguagens como [python]([https://www.python.org](https://www.python.org)), indentação é uma prática obrigatória, já que os blocos de código são separados dessa maneira.

Em outras linguagens, como Javascript e Java, indentação não é obrigatório, mas com certeza um código bem indentado é muito mais fácil de se entender.

Veja abaixo um exemplo da diferença que faz ter um código indentado.

```jsx
// exemplo com indentação
function fatorial (numero) {
    if (numero < 0) {
        return 'O número deve ser maior ou igual a zero!';
    } else if ((numero == 0) || (numero == 1)) {
        return 1;
    } else {
        let acumulador = 1;

        for (x = numero; x > 1; x--) {
            acumulador = acumulador * x;
        }

        return acumulador;
    } 
}

// sem indentação
function fatorial (numero) {
    if (numero < 0) {
return 
'O número deve ser maior ou igual a zero!';} else if ((numero == 0) || (numero == 1)) {
        return 1;
    }
else {
    let acumulador = 1; for (x = numero; x > 1; x--) {acumulador = acumulador * x}

return acumulador;
    } 
}
```

No Javascript, você pode utilizar uma ferramenta para visualizar onde precisa ajustar a indentação, o [Prettier]([https://prettier.io](https://prettier.io)).

### Bônus: Busque conhecimento

A melhor prática com certeza é a busca pela evolução constante. Se você está lendo este post, está no caminho certo.

A tecnologia muda muito e novas boas práticas sempre chegam.

Você não precisa decorar as boas práticas ou mudar toda sua forma de programar. Este processo é continuo.

---

Obrigado pela leitura! *Espero que possa ter ajudado. 🚀*

*Até mais.*
