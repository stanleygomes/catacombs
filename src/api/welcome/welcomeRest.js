const express = require('express')
const welcomeRest = express.Router()

welcomeRest.get('/', (req, res) => {
  res.json({
    message: 'Hi!'
  })
})

module.exports = welcomeRest
