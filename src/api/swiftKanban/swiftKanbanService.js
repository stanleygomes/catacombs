const config = require('../../config')
const http = require('../../utils/http')

const swiftKanbanConfig = config.swiftKanban
const swiftKanbanHeaders = {
  AuthorizationToken: swiftKanbanConfig.authorizationToken,
  boardId: swiftKanbanConfig.boardId
}

const getCard = cardCode => {
  return new Promise((resolve, reject) => {
    const endpoint = `${swiftKanbanConfig.baseURL}/card-operations/boards/${swiftKanbanConfig.boardId}/cards?search=${cardCode}`

    http
      .get(endpoint, '', swiftKanbanHeaders)
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

const transferCard = (cardId, lineToId, columnToId) => {
  return new Promise((resolve, reject) => {
    const endpoint = `${swiftKanbanConfig.baseURL}/card-operations/boards/${swiftKanbanConfig.boardId}/cards/move/board`
    const data = {
      cardDetails: [
        {
          cardType: 'STK',
          cardUniqueId: cardId,
          toSwimId: lineToId,
          toQkeyId: columnToId
        }
      ]
    }

    http
      .put(endpoint, data, swiftKanbanHeaders)
      .then(r => resolve(r))
      .catch(error => reject(error))
  })
}

const transferCardToDelivered = cardCode => {
  return new Promise((resolve, reject) => {
    getCard(cardCode)
      .then(cardData => {
        const cardId = Number(cardData.id)

        transferCard(cardId, swiftKanbanConfig.lineToId, swiftKanbanConfig.columnToId)
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
