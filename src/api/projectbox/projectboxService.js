const crudBasic = require('../crudBasic/crudBasicService')
const slackService = require('../slack/slackService')
const datetimeUtil = require('../../utils/datetime')
const conn = 'projectbox'

const hook = (req, res) => {
  return new Promise((resolve, reject) => {
    const params = getParams(req.body)

    const slackChannelMessage = 'Hello world!!!'

    sendSlackMessage(slackChannelMessage, params.channelUrl)
      .then(resp => resolve(resp))
      .catch(error => reject(error))

//     crudBasic.get(req, res, 'getPrlResumeByPeriod', params, conn).then(response => {
//       const countMonth = response.count_mes
//       const countYear = Math.round(response.count_ano / params.monthIndex)

//       const messageMonth = getMessageByCount(countMonth)
//       const messageYear = getMessageByCount(countYear)

//       const slackChannelMessage = `
// :morumbi:  Opa! Como vai? Vou te passar como está nosso status de chamados.

// *Para este mês de ${params.monthName}:* Estamos com *(${countMonth})* chamados
// ${messageMonth}

// *Para o ano de ${params.year}:* Estamos com média de *(${countYear})* chamados por mês
// ${messageYear}

// Só para lembrar:

// Meta ideal (120%): *100 chamados*
// Meta alvo (100%): *150 chamados*
// Meta limite (80%): *200 chamados*

// Antes de voltar ao morumbi, preciso te avisar: *Este é um valor baseado nos dados atuais. Alguns cards podem ser convertidos para outros tipos e os debitos técnicos ainda podem alterar esse resultado.*
//       `

//       sendSlackMessage(slackChannelMessage, params.channelUrl)
//         .then(resp => resolve(resp))
//         .catch(error => reject(error))
//     }).catch(error => {
//       reject(error)
//     })
  })
}

const getParams = body => {
  const today = new Date()
  var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  const month = String(lastDayOfMonth.getMonth() + 1).padStart(2, '0')
  const day = String(lastDayOfMonth.getDate()).padStart(2, '0')
  const monthName = datetimeUtil.getMonthName(new Date())
  const monthIndex = lastDayOfMonth.getMonth()
  const year = 2021

  return {
    pbi_type: ["'Bug'", "'Dúvida'", "'Tarefa'"].join(', '),
    project_list: [107, 810, 582].join(', '),
    year_date_start: `${year}-01-01 00:00:00`,
    year_date_end: `${year}-12-31 23:59:59`,
    month_date_start: `${year}-${month}-01 00:00:00`,
    month_date_end: `${year}-${month}-${day} 23:59:59`,
    monthName: monthName,
    monthIndex: monthIndex,
    year: year,
    channelUrl: body.response_url
    // channelUrl: 'REMOVED
  }
}

const getMessageByCount = count => {
  const countIdeal = 100
  const countTarget = 150
  const countLimit = 200

  if (count <= countIdeal) {
    return ':fred-uhul:  Estamos na meta ideal dos 120%. Este é o cenário ideal! Parabéns a todos e vamos continuar firmes nesse caminho até o fim do ano.'
  } else if (count > countIdeal && count <= countTarget) {
    return ':flat-check:  Estamos dentro da meta de 100%, que é o nosso alvo. Vamos continuar esse excelente trabalho para mantermos essa média até o fim do ano.'
  } else if (count > countTarget && count <= countLimit) {
    return ':yellow_card:  Estamos dentro do limte da meta de 80%, porém é um ponto de atenção. Vamos continuar trabalhando firme para baixar essa quantidade média até o fim do ano.'
  } else {
    return ':rotating_light:  Estamos abaixo da meta de 80%. Este é um ponto crítico. Vamos continuar trabalhando firme para baixar essa quantidade média até o fim do ano.'
  }
}

const sendSlackMessage = (message, channelUrl) => {
  return new Promise((resolve, reject) => {
    const request = {
      text: message
    }

    slackService
      .pushMessage(channelUrl, request)
      .then(r => resolve(r))
      .catch(error => reject(error))
  })
}

module.exports = {
  hook
}
