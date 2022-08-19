const express = require('express')
const welcomeRest = express.Router()

welcomeRest.get('/', (req, res) => {
  res.json({
    message: 'Hi!'
  })
})

welcomeRest.post('/json', (req, res) => {
  console.log(req.body)

  res.json({
    message: 'Receive request!',
    json: req.body
  })
})

module.exports = welcomeRest
