const config = require('../../config')
const http = require('../../utils/http')

const swiftKanbanConfig = config.swiftKanban

const getConfig = squad => {
  if (swiftKanbanConfig == null || swiftKanbanConfig.squads == null || swiftKanbanConfig.squads[squad] == null) {
    return null
  }

  return {
    authorizationToken: swiftKanbanConfig.squads[squad].authorizationToken,
    boardId: swiftKanbanConfig.squads[squad].boardId,
    lineToId: swiftKanbanConfig.squads[squad].lineToId,
    columnToId: swiftKanbanConfig.squads[squad].columnToId,
    headers: {
      AuthorizationToken: swiftKanbanConfig.squads[squad].authorizationToken,
      boardId: swiftKanbanConfig.squads[squad].boardId
    }
  }
}

const getCard = (squad, cardCode) => {
  return new Promise((resolve, reject) => {
    const skConfig = getConfig(squad)

    if (skConfig == null) {
      resolve(null)
    }

    const endpoint = `${swiftKanbanConfig.baseURL}/card-operations/boards/${skConfig.boardId}/cards?search=${cardCode}`

    http
      .get(endpoint, '', skConfig.headers)
      .then(r => {
        if (r.data && r.data.Response && r.data.Response.details && r.data.Response.details.cardDetails) {
          const { cardDetails } = r.data.Response.details

          resolve(cardDetails[0])
        } else {
          resolve(null)
        }
      })
      .catch(error => reject(error))
  })
}

const transferCard = (squad, card, lineToId, columnToId) => {
  return new Promise((resolve, reject) => {
    const skConfig = getConfig(squad)

    if (skConfig == null) {
      resolve(null)
    }

    const endpoint = `${swiftKanbanConfig.baseURL}/card-operations/boards/${skConfig.boardId}/cards/move/board`
    const data = {
      cardDetails: [
        {
          cardType: card.code.substr(0, 3),
          cardUniqueId: card.id,
          toSwimId: lineToId,
          toQkeyId: columnToId
        }
      ]
    }

    http
      .put(endpoint, data, skConfig.headers)
      .then(r => resolve(r))
      .catch(error => reject(error))
  })
}

const transferCardToDelivered = (squad, cardCode) => {
  return new Promise((resolve, reject) => {
    getCard(squad, cardCode)
      .then(cardData => {
        const card = {
          id: Number(cardData.id),
          code: cardCode
        }

        const skConfig = getConfig(squad)

        if (skConfig == null) {
          resolve(null)
        }

        transferCard(squad, card, skConfig.lineToId, skConfig.columnToId)
          .then(r => resolve(r))
          .catch(error => reject(error))
      })
  })
}

module.exports = {
  getCard,
  transferCard,
  transferCardToDelivered
}
