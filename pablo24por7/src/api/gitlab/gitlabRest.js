const express = require('express')
const gitlabRest = express.Router()
const gitlabService = require('./gitlabService')

gitlabRest.post('/hook', (req, res) => {
  gitlabService.hook(req, res).then(response => {
    res.json(response)
  }).catch(error => {
    res.send(error)
  })
})

module.exports = gitlabRest
