---
title: Consistência de estilo entre editores/IDEs
date: '2021-05-07'
spoiler: O que serão esses algoritmos de renderização de componentes no react?
tags: javascript, reactjs
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/consistencia-estilo-editores%2Feditorconfig-0.png?alt=media&token=41257f7c-765d-4906-8aba-97471299fcde)

Pessoal, hoje vou trazer uma configuração para você colocar no seu repositório para determinar algumad regras que os editores de código/IDEs fiquem padronizados.

Você já deve passado pela situação de commitar seu código e no momento de olhar o diff no git, você commitou diversos espaços no arquivo, sendo que você alterou apenas uma linha.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/consistencia-estilo-editores%2Feditorconfig-1.jpg?alt=media&token=5c2b36c1-32be-4209-9b4b-d6370a4a26ec)

Isso acontece por que seu editor de código (vscode, atom, sublime text etc) possui configurações diferentes de indentação.

Para resolver esse tipo de problema você pode utilizar um arquivo chamado [.editorconfig](https://editorconfig.org). Neste arquivo você vai definir regras como indentação (espacos ou tabs) e charset padrão.

Veja abaixo um exemplo de arquivo com as propriedades disponíveis.

```
# define que a pasta onde o arquivo está, é a raiz do projeto
root = true

# Padrão de de nova linha nk Unix
[*]
end_of_line = lf
insert_final_newline = true

# Charset padrão
[*.{js,py}]
charset = utf-8

# Indentação com 4 espaços
Você pode escolher entre tab ou space
[*.py]
indent_style = space
indent_size = 4

# sobrepor configuração para um diretório específico.
[lib/**.js]
indent_style = space
indent_size = 2
```

Bora implementar esse arquivo nos nossos projetos. 

---

Obrigado pela leitura! Espero que possa ter ajudado. 🚀
