![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/luizalabs/noahjs)
![Build Status](https://img.shields.io/github/actions/workflow/status/luizalabs/noahjs/deploy.yml)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Open Issues](https://img.shields.io/github/issues/luizalabs/noahjs)
![Contributors](https://img.shields.io/github/contributors/luizalabs/noahjs)

# O Cordeiro de Deus: Graça, Perdão e Sacrifício.

Esse projeto é uma documentação interativa sobre a vida e os ensinamentos de Jesus Cristo, explorando temas como graça, perdão e sacrifício. Nele vamos contar a história de Jesus, desde seu nascimento até sua ressurreição, destacando momentos chave que ilustram esses conceitos centrais do cristianismo.

<p>
  <img src="assets/images/readme.png" alt="Galilee Walker" width="600"/>
</p>

## ⚡ Stack Tecnológica

- **Framework**: [Docusaurus](https://docusaurus.io/)
- **Linguagem**: TypeScript
- **Node.js**: >= 22.x

## 🚦 Como Executar o projeto

### ⚡ Instalação e Execução

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd the-lamb

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run start
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## 🎨 Qualidade de Código

Este projeto utiliza **ESLint** e **Prettier** para garantir qualidade e consistência do código.

### 📋 Configurações

As regras e definições aplicadas estão nos arquivos abaixo.

| Ferramenta | Arquivo de Configuração | Descrição                                    |
| ---------- | ----------------------- | -------------------------------------------- |
| ESLint     | `eslint.config.mjs`     | Regras de linting e integração com Prettier |
| Prettier   | `.prettierrc`           | Regras de formatação de código               |
| VS Code    | `.vscode/settings.json` | Configurações do editor                      |

> **💡 Dica**: Instale as extensões `ESLint` e `Prettier - Code formatter` no VS Code para melhor experiência de desenvolvimento.

## 🔒 Git Hooks e Automação (Husky)

Este projeto utiliza **Husky** para automatizar verificações de qualidade antes dos commits e pushes.

## 🤝 Como contribuir

Suas contribuições são muito bem-vindas! Se você tem uma ideia de melhoria, correção de bug ou nova funcionalidade, sinta-se à vontade para abrir uma issue ou pull request. Colaboração e novas perspectivas são altamente valorizadas aqui—vamos construir algo incrível juntos!

Por favor, siga nosso código de conduta em todas as interações com o projeto.

### Passo a passo para contribuir

1. **Crie uma branch**: Sempre crie uma nova branch a partir da `master` usando o padrão `feature/xxx`, `fix/xxx` ou outro prefixo apropriado.

2. **Faça commits pequenos e focados**: Cada commit deve representar uma alteração lógica única. Evite commits grandes com muitas mudanças não relacionadas. Isso facilita a revisão e validação do código.

3. **Padrão de mensagens de commit**: Todos os commits devem seguir a especificação [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) (Versionamento Semântico). Exemplos:
    - `feat: adicionar funcionalidade de login do usuário`
    - `fix: corrigir bug no login`
    - `chore: atualizar dependências`
    - `docs: atualizar README`
    - `test: adicionar testes para login`

> **Recomendações:**
>
> Prefira escrever as mensagens de commit em português e sem acentuação. Isso facilita a padronização e evita problemas de encoding em diferentes sistemas.
>
> Apenas commits do tipo `feat` e `fix` geram tag de deploy e disparam uma release. Outros tipos como `chore`, `docs`, `test`, etc., não geram tag de deploy.
>
> Commits que não seguirem esse padrão **não** serão mergeados, pois quebram o processo de geração de release.
>
> Nem todos os commits precisam ser `feat` ou `fix`, mas sempre use o tipo correto para sua alteração.

4. **Pull Request (PR)**: Abra um PR para a `master` com um título claro e descritivo. Na descrição do PR, explique o que está sendo feito e por quê. Referencie issues relacionadas, se aplicável.

5. **Validação**: O workflow do PR irá validar seu código. Só é possível fazer merge se **todos os checks passarem**.

6. **Release e Deploy**: Para detalhes sobre deploy e versionamento, consulte a [seção de Versionamento no README.md](./README.md).

   > **Importante:** O Pull Request só será aceito se passar por todos os checks automáticos definidos no workflow `pr-checks.yml`.

Esse fluxo garante qualidade, rastreabilidade e entrega contínua de valor. Seguindo essas orientações você evita erros e agiliza o processo de revisão e release.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
