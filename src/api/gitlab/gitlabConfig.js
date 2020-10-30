const slackChannels = {
  triboSolucoes: 'REMOVED
  squadPlanejamento: 'REMOVED
  squadComercial: 'REMOVED
  // squadComercial: 'REMOVED
}

const squads = [
  {
    name: 'Squad Planejamento Indústria',
    slackChannel: slackChannels.squadPlanejamento,
    projects: [
      {
        id: 851,
        name: 'ms-operacao',
        url: 'https://gitlab.softbox.com.br/papaleguas/ms-operacao'
      },
      {
        id: 837,
        name: 'ms-cadastro',
        url: 'https://gitlab.softbox.com.br/papaleguas/ms-cadastro'
      },
      {
        id: 690,
        name: 'Cashlink Indústria',
        url: 'https://gitlab.softbox.com.br/tribo-financeiro/cashlink-industria'
      },
      {
        id: 836,
        name: 'papaleguas-gateway',
        url: 'https://gitlab.softbox.com.br/papaleguas/papaleguas-gateway'
      },
      {
        id: 91,
        name: 'cashlink_war',
        url: 'https://gitlab.softbox.com.br/cashlink/cashlink_war'
      }
    ]
  },
  {
    name: 'Squad Comercial Indústria',
    slackChannel: slackChannels.squadComercial,
    projects: [
      {
        id: 989,
        name: 'pricing',
        url: 'https://gitlab.softbox.com.br/PRICING/pricing'
      },
      {
        id: 259,
        name: 'portal-execucao',
        url: 'https://gitlab.softbox.com.br/portal-execucao/portal-execucao'
      },
      {
        id: 1000,
        name: 'produtos-clientes',
        url: 'https://gitlab.softbox.com.br/PRICING/produtos-clientes'
      },
      {
        id: 1066,
        name: 'vortex-java',
        url: 'https://gitlab.softbox.com.br/vortex/vortex-java'
      },
      {
        id: 196,
        name: 'vortex-frontend',
        url: 'https://gitlab.softbox.com.br/vortex/vortex-frontend'
      },
      {
        id: 358,
        name: 'solucao-certa',
        url: 'https://gitlab.softbox.com.br/solucao_certa/solucao-certa'
      }
    ]
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
  squads,
  getPrMessage,
  getTagMessage,
  slackChannels
}
