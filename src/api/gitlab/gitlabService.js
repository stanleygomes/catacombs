const http = require('../../utils/http')

const hook = (req, res) => {
  return new Promise((resolve, reject) => {
    const body = req.body
    const slackHookUrl = 'REMOVED
    const action = body.event_type
    const projectName = body.project.name
    const repositoryUrl = body.project.homepage
    const branchSource = body.object_attributes.source_branch
    const branchTarget = body.object_attributes.target_branch
    const iid = body.object_attributes.iid

    console.log(body);

    resolve(body)

    if (action === 'merge_request') {
      const request = {
        text: `
Tem merge request novo para aprovar no projeto *${projectName}*, dá uma olhada aqui nesse link:

${repositoryUrl}/merge_requests/${iid}

Branch origem: *${branchSource}*
Branch destino: *${branchTarget}*

Vou comprar um chocolate para quem validar! :harold: :morumbi: :araxa:
        `
      }

      http.post(slackHookUrl, request).then(resp => {
        resolve(resp)
      }).catch(err => reject(err))
    }
  })
}

module.exports = {
  hook
}
