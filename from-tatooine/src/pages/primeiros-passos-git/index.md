---
title: Primeiros passos com Git
date: '2021-06-19'
spoiler: 
tags: git, github
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/primeiros-passos-git%2Fgit-0.png?alt=media&token=08e52552-0688-4891-82fb-2643e48532a4)

## O que é o Git?

Hoje o assunto é [GIT](https://git-scm.com). O Git é a melhor ferramenta para gerenciamento e versionamento de código e também a mais utilizada atualmente.

Não importa se você é desenvolvedor Javascript, Java, Python ou C++, com certeza você vai precisar utilizar o Git. Meu objetivo neste post é mostrar o básico de Git (publicando o primeiro commit) para quem está começando na área de desenvolvimento.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/primeiros-passos-git%2Fgit-1.jpg?alt=media&token=6512792b-4c53-4707-97cb-dfd0b8ffddc5)

## Por que usar o Git?

Vamos direto ao ponto: as duas principais facilidades oferecidas para quem está começando com Git é salvar seu código em um servidor na nuvem e o controle de versionamento de todas as alterações feitas nele.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/primeiros-passos-git%2Fgit-2.png?alt=media&token=fc70037f-04b0-4003-a407-01166c51c34d)

Você já deve ter ouvido falar do [github](https://github.com), [bitbucket](https://bitbucket.com) ou do [gitlab](https://gitlab.com). Estes são serviços de empresas que hospedam as versões dos códigos dos seus projetos utilizando a tecnologia do Git.

Com o seu código hospedado em um servidor, você tem a garantia de um backup, caso aconteça algo com seu computador e também pode compartilhar esse código para que outras pessoas possam trabalhar nele.

Já o versionamento de código te garante uma rastreabilidade das mudanças que foram feitas com o tempo, possibilitando também que você desfaça o código que você desenvolveu com facilidade.

## O primeiro repositório

Antes de mais nada, você precisa criar um repositório (que nada mais é do que um projeto). Escolha uma pasta do seu computador.

```bash
mkdir meu-projeto
cd meu-projeto
git init
```

Quando você cria um repositório em um dos serviços apresentados anteriormente, eles fornecem uma URL para hospedar seu projeto. Nesse momento, vamos adicionar a URL do projeto no repositório local.

```bash
git remote add origin http://urlDoServico.com/seuProjeto
```

O próximo passo é adicionar seus arquivos dentro dessa pasta. Para em seguida, fazer o primeiro commit (que é forma como o git grava uma versão de alteração no seu código). Primeiro, vamos adicionar os arquivos que queremos commitar.

```bash
# adicionar todos os arquivos da pasta
git add .

# deixe uma mensagem que explique o que você desenvolveu
git commit -m "Criando meu primeiro commit"
```

O último passo agora é enviar o código para o repositório online.

```bash
git push origin master
```

Este é apenas o começo. O Git oferece diversas possibilidades, as quais abordarei em próximos posts.

---

Se você gostou, me segue para novos posts e deixa o like nesse post.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀
