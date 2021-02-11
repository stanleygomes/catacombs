const http = require('../../utils/http')

const pushMessage = (hookUrl, request, attributes) => {
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
Tem merge request aberto por *${data.userName}* para revisão no projeto *${data.projectName}*, da branch origem *${data.branchSource}* para a branch destino *${data.branchTarget}*. Dá uma olhada aqui nesse link:
:chocolate_bar: ${data.repositoryUrl}/merge_requests/${data.iid}
`
  // Resumo: *${data.title}*
}

const getTagMessage = data => {
  const message = `:rocket: Deploy do projeto *${data.projectName}* em *Produção* - Tag: *${data.tagVersion}*. Responsável: *${data.tagAuthor}* [${data.squadName}]`

  if (data.cards != null && data.cards.length > 0) {
    return `${message}. Card(s): *${data.cards.join(',')}*`
  }

  return message
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
