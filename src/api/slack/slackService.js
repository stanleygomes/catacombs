const http = require('../../utils/http')

const pushMessage = (hookUrl, request, attributes = {}) => {
  return new Promise((resolve, reject) => {
    http.post(hookUrl, request).then(resp => {
      console.log('Hook executado com sucesso!')

      resolve({
        status: resp.status,
        statusText: resp.statusText,
        headers: resp.headers,
        config: {
          url: resp.config.url,
          post: resp.config.post,
          data: resp.config.data
        },
        message: 'Hook executado com sucesso',
        slackHookUrl: hookUrl,
        attributes: attributes,
        request: request
      })
    }).catch(err => reject(err))
  })
}

const getPrMessage = data => {
  return `
:beach_with_umbrella: Novo merge request:

Solicitante: *${data.userName}*
Projeto: *${data.projectName}*
Branch origem: *${data.branchSource}*
Branch destino: *${data.branchTarget}*

Validação:
${data.repositoryUrl}/merge_requests/${data.iid}
`
  // Resumo: *${data.title}*
}

const getTagMessage = data => {
  const message = `
:rocket: Deploy iniciado em *Produção* para o projeto *${data.projectName}*

Tag: *${data.tagVersion}*
Responsável: *${data.tagAuthor}* [${data.squadName}]
Detalhes: *${data.cards.join(',')}*
`

  return message

  // if (data.cards != null && data.cards.length > 0) {
  //   return `${message}. Card(s): *${data.cards.join(',')}*`
  // }

  // return message
}

const getPipelineStartMessage = data => {
  return `:rocket: Iniciando restore de banco de dados via pipeline *${data.build.stageName}* para o projeto *${data.projectName}*. Responsável: *${data.userName}*`
}

const getPipelineEndMessage = data => {
  return `:flat-check: Restore de banco de dados via pipeline *${data.build.stageName}* finalizado para o projeto *${data.projectName}*. Responsável: *${data.userName}*`
}

module.exports = {
  pushMessage,
  getPrMessage,
  getTagMessage,
  getPipelineStartMessage,
  getPipelineEndMessage
}
