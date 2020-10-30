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
  const projects = config.projects

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]

    if (project.id === projectId) {
      const squadConfig = config.squads[project.squad]

      project.squadName = squadConfig.name
      project.slackChannel = squadConfig.slackChannel

      return project
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

    if (attributes != null) {
      const squadProject = getProjectById(attributes.projectId)

      if (squadProject == null) {
        resolve('Projeto não disponível!')
      }

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
        slackHookUrl = config.squads.tribo.slackChannel
        attributes.squadName = squadProject.squadName
        textTemplate = config.getTagMessage(attributes)

        request = {
          text: textTemplate
        }
      }
    }

    // slackHookUrl = 'REMOVED

    if (request != null) {
      http.post(slackHookUrl, request).then(resp => {
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
          slackHookUrl: slackHookUrl,
          attributes: attributes,
          request: request
        })
      }).catch(err => reject(err))
    } else {
      console.log('Hook não foi executado!')
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
