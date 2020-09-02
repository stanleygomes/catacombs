const http = require('../../utils/http')

/*
App slack:
https://api.slack.com/apps/A019JLAD24W/install-on-team
*/

const hook = (req, res) => {
  return new Promise((resolve, reject) => {
    const body = req.body
    // const slackHookUrl = 'REMOVED
    const slackHookUrl = 'REMOVED
    const action = body.event_type
    const projectName = body.project.name
    const repositoryUrl = body.project.homepage
    let textTemplate = null
    let request = null

    if (action === 'merge_request') {
      const branchSource = body.object_attributes.source_branch
      const branchTarget = body.object_attributes.target_branch
      const iid = body.object_attributes.iid
      const mergeStatus = body.object_attributes.merge_status
      const title = body.object_attributes.title

      // open merge request
      if (mergeStatus === 'unchecked') {
        textTemplate = `
@here Tem merge request novo para aprovar no projeto *${projectName}*, dá uma olhada aqui nesse link:

${repositoryUrl}/merge_requests/${iid}

Branch origem: *${branchSource}*
Branch destino: *${branchTarget}*
Mensagem: *${title}*

Vou comprar um chocolate para quem validar! :morumbi:
        `
      } else {
//         textTemplate = `
// @here O merge request abaixo no projeto *${projectName}* foi avaliado, dá uma olhada aqui nesse link:

// ${repositoryUrl}/merge_requests/${iid}

// Branch origem: *${branchSource}*
// Branch destino: *${branchTarget}*
// Mensagem: *${title}*

// Boa sorte! :harold:
//         `
      }

      request = {
        text: textTemplate
      }

      // solicitado: unchecked
      // aprovado/cancelado: can_be_merged
    }

    if (request != null) {
      http.post(slackHookUrl, request).then(resp => {
        resolve(resp)
      }).catch(err => reject(err))
    } else {
      resolve(true)
    }
  })
}

module.exports = {
  hook
}
