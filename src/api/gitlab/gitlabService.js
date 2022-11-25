const config = require('../../config')
const slackService = require('../slack/slackService')
const swiftKanbanService = require('../swiftKanban/swiftKanbanService')

const slackConfig = config.slack
const gitlabConfig = config.gitlab

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
    userName: data.user != null ? data.user.name : '',
    message: data.message != null ? data.message : '',
    cards: []
  }

  // tag push action
  if (data.ref != null) {
    const tag = data.ref.replace('refs/tags/', '')

    attributes.tagVersion = tag.trim()
    attributes.tagAuthor = data.user_name
  }

  // pipeline action
  if (attributes.action === 'pipeline') {
    attributes.pipelineBranch = data.object_attributes.ref
    attributes.pipelineStatus = data.object_attributes.status
    if (data.builds != null && data.builds.length > 0) {
      const build = data.builds[0]

      attributes.build = {
        id: build.id,
        stage: build.stage,
        stageName: build.name,
        status: build.status,
        started_at: build.started_at,
        finished_at: build.finished_at
      }
    }
  }

  return attributes
}

const getProjectById = projectId => {
  const projects = gitlabConfig.projects

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]

    if (project.id === projectId) {
      const squadConfig = slackConfig.squads[project.squad]

      project.squadName = squadConfig.name
      project.slackChannelMergeRequest = squadConfig.slackChannelMergeRequest
      project.slackChannelTag = squadConfig.slackChannelTag

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
    let squadProject = null

    const body = req.body
    const attributes = getAttributes(body)

    if (attributes != null) {
      squadProject = getProjectById(attributes.projectId)

      if (squadProject == null) {
        resolve('Projeto não disponível!')
      }

      slackHookUrl = squadProject.slackChannelMergeRequest

      // open merge request
      if (squadProject.enabledHookMr === true && attributes.action === 'merge_request') {
        // open merge request
        // const branchTarget = attributes.branchTarget
        // if (attributes.mergeStatus === 'unchecked' && (branchTarget === 'develop' || branchTarget === 'projetos' || branchTarget === 'spring_master' || branchTarget === 'spring_homologacao')) {
        if (attributes.mergeStatus === 'unchecked' || attributes.mergeStatus === 'preparing') {
          textTemplate = slackService.getPrMessage(attributes)

          request = {
            text: textTemplate
          }
        }
      }

      // pipeline execution (expecific for restore database)
      if (attributes.action === 'pipeline') {
        const pipelineBranch = attributes.pipelineBranch
        const pipelineStatus = attributes.pipelineStatus

        if (pipelineBranch === 'automacao/restoredb' && pipelineStatus !== 'skipped' && pipelineStatus !== 'pending') {
          if (attributes.build != null && attributes.build.finished_at == null) {
            // started
            textTemplate = slackService.getPipelineStartMessage(attributes)
          } else if (attributes.build != null && attributes.build.finished_at != null) {
            // ended
            textTemplate = slackService.getPipelineEndMessage(attributes)
          } else {
            resolve('Pipeline não executada')
          }

          request = {
            text: textTemplate
          }
        }
      }

      // push tag
      if (squadProject.enabledHookDeploy === true && attributes.action === 'tag_push') {
        // change channel to push the message
        // slackHookUrl = slackConfig.squads.tribo.slackChannelTag
        slackHookUrl = squadProject.slackChannelTag
        attributes.squadName = squadProject.squadName

        if (attributes.message != null && attributes.message !== '') {
          // get an array of cards
          attributes.cards = attributes.message.split(',')
          attributes.cards = attributes.cards.map(item => item.trim())
        }

        textTemplate = slackService.getTagMessage(attributes)

        request = {
          text: textTemplate
        }
      }
    }

    // slackHookUrl = 'REMOVED

    if (request != null) {
      console.log('// Inicio request')
      console.log(`URL: ${slackHookUrl}`)
      console.log(`request: ${JSON.stringify(request)}`)
      console.log(`Attributes: ${JSON.stringify(attributes)}`)
      console.log('// Fim request')

      slackService
        .pushMessage(slackHookUrl, request, attributes)
        .then(r => {
          if (attributes.cards != null && attributes.cards.length > 0) {
            // const cards = attributes.cards.map(cardCode => {
            //   return swiftKanbanService
            //     .transferCardToDelivered(squadProject.squad, cardCode)
            // })

            // Promise.all(cards)
            //   .then(values => resolve(values))
            resolve(r)
          } else {
            resolve(r)
          }
        })
        .catch(error => reject(error))
    } else {
      console.log('Hook não foi executado!')
      resolve({
        status: 400,
        message: 'Request não executada.',
        body: body
      })
    }
  })
}

module.exports = {
  hook
}
