const http = require('../../utils/http')
const config = require('./gitlabConfig')

/*
  App slack:
  https://api.slack.com/apps/A019JLAD24W/install-on-team

  Slack test channel (gitlab-integration-test):
  REMOVED
*/

const getAttributes = data => {
  if (data == null) {
    return null
  }

  const attributes = {
    action: data.object_kind,
    projectId: data.project != null ? data.project.id : '',
    projectName: data.project != null ? data.project.name : '',
    repositoryUrl: data.project != null ? data.project.homepage : '',
    branchSource: data.object_attributes != null ? data.object_attributes.source_branch : '',
    branchTarget: data.object_attributes != null ? data.object_attributes.target_branch : '',
    iid: data.object_attributes != null ? data.object_attributes.iid : '',
    mergeStatus: data.object_attributes != null ? data.object_attributes.merge_status : '',
    title: data.object_attributes != null ? data.object_attributes.title : '',
    userName: data.user != null ? data.user.name : ''
  }

  if (data.commits != null && data.commits.length > 0) {
    const totalCommits = data.total_commits_count
    const commitTag = data.commits[totalCommits - 1]

    attributes.tagVersion = commitTag.message.trim()
    attributes.tagAuthor = commitTag.author.name
  }

  return attributes
}

const getProjectById = projectId => {
  const squads = config.squads

  for (let i = 0; i < squads.length; i++) {
    const squad = squads[i]

    for (let j = 0; j < squad.projects.length; j++) {
      const project = squad.projects[j]

      if (project.id === projectId) {
        delete squad.projects
        squad.project = project

        return squad
      }
    }
  }

  return null
}

const hook = (req, res) => {
  return new Promise((resolve, reject) => {
    let textTemplate = null
    let request = null
    let slackHookUrl = null

    const body = req.body
    const attributes = getAttributes(body)

    console.log('##################')
    console.log(body)

    console.log('$$$$$$$$$$$$$$$$$$')
    console.log(attributes)

    if (attributes != null) {
      const squadProject = getProjectById(attributes.projectId)
      slackHookUrl = squadProject.slackChannel

      // open merge request
      if (attributes.action === 'merge_request') {
        // open merge request
        if (attributes.mergeStatus === 'unchecked' && attributes.branchTarget === 'develop') {
          textTemplate = config.getPrMessage(attributes)

          request = {
            text: textTemplate
          }
        }
      }

      // push tag
      if (attributes.action === 'push') {
        slackHookUrl = config.slackChannels.triboSolucoes
        attributes.squadName = squadProject.name
        textTemplate = config.getTagMessage(attributes)

        request = {
          text: textTemplate
        }
      }
    }

    // slackHookUrl = 'REMOVED

    if (request != null) {
      http.post(slackHookUrl, request).then(resp => {
        console.log(resp)

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
          slackHookUrl: slackHookUrl,
          attributes: attributes,
          request: request
        })
      }).catch(err => reject(err))
    } else {
      resolve({
        status: 400,
        message: 'Request não enviada.'
      })
    }
  })
}

module.exports = {
  hook
}
