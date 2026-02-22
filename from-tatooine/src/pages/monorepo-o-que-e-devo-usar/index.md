---
title: Monorepo? O que é? Devo usar?
date: '2021-11-03'
spoiler: Mais uma polêmica?
tags: frontend, monorepo, web
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/monorepo-o-que-e-devo-usar%2F68zjhc9evjfw0nepw30y.png?alt=media&token=ef25ab93-42d8-4e94-ac8d-434a7999c9dc)

Monorepo é simplesmente a definição de arquitetura em que você utiliza apenas um repositório que podem conter vários projetos ao inves de distribuir esses projetos em vários repositórios. Você pode ter, por exemplo, um repositório que contenha um subdiretório de sua aplicação web, outro para seu aplicativo e outro para sua API.

Esses projetos estão conectados e podem compartilhar o gerenciamento de dependências.

Quando se fala em Monorepo, rapidamente vem a comparação com outra arquitetura que é a de Polirepo. Fazendo o paralelo entre elas, podemos notar semelhanças e diferenças.

![monorepo vs multirepo](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/monorepo-o-que-e-devo-usar%2Fw7wtoxahoyegm10u9gt5.png?alt=media&token=6c513d78-3eaf-4f43-ba5f-83d970fe7ad7)

As principais semelhanças são inerentes a própria forma como são essas arquiteturas.

- Existem projetos (grandes e pequenos) bem sucedidos utilizando utilizando Monorepo ou Polirepo, como também existem projetos que fracassaram utilizando qualquer um dos dois;
- Ambas arquiteturas são simples de manter, implementar e escalar quando o projeto está no começo. Quando ele começa a crescer as dificuldades de manter um super repositório crescem, no caso do Monorepo e as dificuldades de manter dezenas ou centenas de repositórios também crescem, no caso do Polirepo.

Isso mostra que não existe uma arquitetura superior e sim que o desenvolvedor precisa analisar quando deve usar um caso ou outro.

Podemos citar alguns problemas nessa arquitetura.

- Pasta .git pode ficar gigante no repositório;
- O Git clone fica lento;
- Alto número de commits e de branchs afetam a performance do repositório;
- Tempo de build pode ser demorado (pelo número de arquivos);

Algumas soluções que podem ser implementadas.

- Manter poucas branchs que tenham uma longa vida para que o git tenha que se preocupar com menos referencias;
- Colocar arquivos de midia como gif, imagens e vídeos em um outro serviço, como o Git LFS;
- Não limita o acesso a determinadas partes do código a equipes ou pessoas específicas;

> Monorepo é diferente de repositório monolito

![vantagens](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/monorepo-o-que-e-devo-usar%2F1bdotqerne6boarkueix.jpg?alt=media&token=7b63de31-ec06-4e95-bf86-640b6ab2c45d)

Agora vamos para os pontos positivos de utilização do conceito de Monorepo.

- Em um único lugar você tem todas as configurações, CI/CD, testes de forma que tudo fica padronizado para todos os subprojetos;
- Refatorar um problema ou uma melhoria de uma vez só em vários projetos em um único pull request (dependencia com problema de segurança, por exemplo);
- Gerenciamento e manutenção de dependencias centralizada e simplificada;
- Reutilização e compartilhamento de código para executar uma mesma tarefa em múltiplos repositórios;

Se você conhece algum outra informação relevante sobre os Monorepos, comenta aqui embaixo.

---

Se você gostou, me segue para novos posts e deixa o like nesse post.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀
