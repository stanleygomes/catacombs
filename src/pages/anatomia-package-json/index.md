---
title: 🧠 A anatomia do package.json
date: '2021-02-14'
spoiler: Conheça as principais funcionalidades deste arquivo para seu projeto
tags: javascript, packagejson
published: true
---

### O que é e para que serve?

Se você trabalha com javascript, com certeza já ouviu falar e editou o famoso package.json. Nesse post, vou focar em mostrar algumas das funcionalidades e props disponibilizadas por esse arquivo para seu projeto.

O [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) é um arquivo de um projeto javascript que é responsável por guardar informações, scripts e controle de versionamento de bibliotecas do projetos. Essas dependências são gerenciadas pelo [NPM](https://www.npmjs.com/).

### Informações sobre o projeto

Você pode utilizar algumas propriedades do package.json para guardar informações sobre o projeto e que também são úteis e necessárias ao publicar um pacote no NPM. Você pode visualizar nesse [link](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) todas as propriedades reservadas do package.json.

Abaixo, um exemplo de configurações básicas de um package.json

```json
{
	"name": "nodevader",
	"version": "2.1.1",
	"description": "",
	"main": "index.js",
	"license": "MIT"
}
```

A propriedade `version` utiliza a notação de [versionamento semântico](https://semver.org). Já a propriedade main é utilizada em alguns projetos como o ponto de entrada da aplicação.

### Scripts

Na sessão de scripts você pode declarar alguns nomes para abreviar a execução de ações no projeto para usar em uma palavra.

Veja abaixo um exemplo de package.json com alguns scripts com diferentes execuções para ambientes desenvolvimento, homologação e produção.

```json
{
	"name": "nodevader",
	"version": "2.1.1",
	"description": "",
	"main": "index.js",
	"scripts": {
		"development": "NODE_ENV=development nodemon src/index.js",
		"staging": "NODE_ENV=staging pm2 start ecosystem-staging.config.js",
		"production": "NODE_ENV=development pm2 start ecosystem-production.config.js",
		"migrate:up": "node src/migrate.js"
	},
	"license": "MIT"
}
```

Para executar um script, basta rodar o comando no terminal `npm run SCRIPT_NAME`:

```bash
npm run development
```

### Dependencias

A principal responsabilidade do package.json é controlar as versões das dependências de pacotes do projeto. Ele é declarado como um objeto com nome e versão. É possível instalar dependências para ambiente apenas desenvolvimento e quando o NODE_ENV

```json
{
	"name": "nodevader",
	"version": "2.1.1",
	"description": "",
	"main": "index.js",
	"scripts": {
		"development": "NODE_ENV=development nodemon src/index.js",
		"staging": "NODE_ENV=staging pm2 start ecosystem-staging.config.js",
		"production": "NODE_ENV=development pm2 start ecosystem-production.config.js",
		"migrate:up": "node src/migrate.js"
	},
	"dependencies": {
    "axios": "^0.21.1",
    "dotenv": "^8.2.0",
    "express": "^4.16.4",
    "winston": "^3.3.3"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "eslint": "^6.3.0",
    "mocha": "^8.2.1"
  },
	"license": "MIT"
}
```

Para instalar e adicionar no package.json um dependência de desenvolvimento:

```bash
npm install --save-dev mocha
```

Para instalar apenas as dependências e ignorar as dependências de desenvolvimento basta adicionar a flag `--production`.

```bash
npm install --production
```

### Lock de dependências

Quando você executa o comando `npm install` para instalar as dependências do projeto, é criado um arquivo package-lock.json que contém uma lista detalhada da árvore de dependências com a versão exata de cada dependência para garantir maior precisão e velocidade no controle dos pacotes do projeto.

Recomenda-se deixar esse arquivo commitado no projeto, visto que ele sempre acompanha as alterações feitas no package.json.

---

Obrigado pela leitura! *Espero que possa ter ajudado. 🚀*

*Até mais.*
