# via-veritas-vita

Este é um site da ONG via-veritas-vita que busca ensinar teologia a jovens e mostrar o caminho que Jesus nos ensinou a andar. Queremos resgatar essas almas para junto de Cristo.

Esse projeto foi dividido em 4 atividades, com 4 entregas. Cada entrega foi separada em uma branch para poder acompanhar a evolução. Esse é nosso branching GitFlow.

## Versionamento

Na raiz do repositorio tem um arquivo `CHANGELOG.md` que contem o versionamento semântico do projeto.

## Como usar

### Instalação

Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Sua aplicação estará disponível em `http://localhost:5173`.

## Build para Produção

Crie um build de produção. O build de produção gera um código minificado e otimiza as imagens.

```bash
npm run build
```

## Acessibilidade: Suporte a Leitores de Tela

Todas as páginas principais do site foram desenvolvidas com foco em acessibilidade para leitores de tela:

- Uso de elementos HTML semânticos (nav, main, header, footer, section, etc.) para facilitar a navegação por assistentes.
- Inclusão de atributos ARIA relevantes para indicar funções, estados e relações entre componentes interativos.
- Textos alternativos (alt) descritivos em todas as imagens e ícones.
- Estrutura clara e hierárquica de títulos e seções.
- Contraste minímo para texto normal de 4.5:1

Essas práticas garantem que usuários de leitores de tela possam navegar, compreender e interagir com o conteúdo do site de forma eficiente.

## Acessibilidade: Navegação por Teclado

O site oferece navegação aprimorada por teclado tanto no menu quanto nos formulários:

- **Menu principal e dropdown:**
	- Use <kbd>Tab</kbd> e <kbd>Shift</kbd>+<kbd>Tab</kbd> para mover entre os itens do menu.
	- Use <kbd>Seta Direita</kbd> e <kbd>Seta Esquerda</kbd> para navegar entre os links.
	- Pressione <kbd>Enter</kbd> ou <kbd>Seta para baixo</kbd> na opção "Conteúdo" para acessar o dropdown.
	- Use <kbd>Seta para cima</kbd> e <kbd>Seta para baixo</kbd> para navegar entre os itens do dropdown.

- **Formulários:**
	- Use <kbd>Enter</kbd> ou <kbd>Seta para baixo</kbd> para avançar para o próximo campo.
	- Use <kbd>Seta para cima</kbd> para voltar ao campo anterior.

Esses atalhos tornam o site mais acessível e ágil para navegação sem mouse.

---

Built with ❤️ using React Router.
