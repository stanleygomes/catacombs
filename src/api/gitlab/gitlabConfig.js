const squads = {
  planejamento: {
    name: 'Squad Planejamento Indústria',
    slackChannel: 'REMOVED
  },
  comercial: {
    name: 'Squad Comercial Indústria',
    slackChannel: 'REMOVED
  },
  tribo: {
    name: 'Tribo Soluções para o Mercado',
    slackChannel: 'REMOVED
  }
}

const projects = [
  {
    id: 851,
    name: 'ms-operacao',
    url: 'https://gitlab.softbox.com.br/papaleguas/ms-operacao',
    squad: 'planejamento'
  },
  {
    id: 837,
    name: 'ms-cadastro',
    url: 'https://gitlab.softbox.com.br/papaleguas/ms-cadastro',
    squad: 'planejamento'
  },
  {
    id: 690,
    name: 'Cashlink Indústria',
    url: 'https://gitlab.softbox.com.br/tribo-financeiro/cashlink-industria',
    squad: 'planejamento'
  },
  {
    id: 836,
    name: 'papaleguas-gateway',
    url: 'https://gitlab.softbox.com.br/papaleguas/papaleguas-gateway',
    squad: 'planejamento'
  },
  {
    id: 91,
    name: 'cashlink_war',
    url: 'https://gitlab.softbox.com.br/cashlink/cashlink_war',
    squad: 'planejamento'
  },
  {
    id: 989,
    name: 'pricing',
    url: 'https://gitlab.softbox.com.br/PRICING/pricing',
    squad: 'comercial'
  },
  {
    id: 259,
    name: 'portal-execucao',
    url: 'https://gitlab.softbox.com.br/portal-execucao/portal-execucao',
    squad: 'comercial'
  },
  {
    id: 1000,
    name: 'produtos-clientes',
    url: 'https://gitlab.softbox.com.br/PRICING/produtos-clientes',
    squad: 'comercial'
  },
  {
    id: 1066,
    name: 'vortex-java',
    url: 'https://gitlab.softbox.com.br/vortex/vortex-java',
    squad: 'comercial'
  },
  {
    id: 196,
    name: 'vortex-frontend',
    url: 'https://gitlab.softbox.com.br/vortex/vortex-frontend',
    squad: 'comercial'
  },
  {
    id: 358,
    name: 'solucao-certa',
    url: 'https://gitlab.softbox.com.br/solucao_certa/solucao-certa',
    squad: 'comercial'
  }
]

const getPrMessage = data => {
  return `
:chocolate_bar: Tem merge request novo para aprovar no projeto *${data.projectName}*, dá uma olhada aqui nesse link:

${data.repositoryUrl}/merge_requests/${data.iid}

Branch origem: *${data.branchSource}*
Branch destino: *${data.branchTarget}*
Mensagem: *${data.title}*
Quem solicitou: *${data.userName}*
`
}

const getTagMessage = data => {
  return `:rocket: Deploy do projeto *${data.projectName}* em *Produção* - Tag: *${data.tagVersion}*. Responsável: *${data.tagAuthor}* [${data.squadName}]`
}

module.exports = {
  projects,
  squads,
  getPrMessage,
  getTagMessage
}
