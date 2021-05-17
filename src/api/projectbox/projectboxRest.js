const express = require('express')
const projectboxRest = express.Router()
// const projectboxService = require('./projectboxService')

projectboxRest.post('/hook', (req, res) => {
  console.log(req.body)
  res.json(req.body)
  // projectboxService.hook(req, res).then(response => {
  //   res.json(response)
  // }).catch(error => {
  //   res.send(error)
  // })
})

module.exports = projectboxRest
