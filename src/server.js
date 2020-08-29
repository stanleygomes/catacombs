const express = require('./express')
const config = require('./config')
const moment = require('moment')
const timeStart = moment().format('DD/MM/YYYY HH:mm')

const started = () => console.log(`Running on port ${config.server.port}. Started at: ${timeStart}.`)

express.listen(config.server.port, started)
