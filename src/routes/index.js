const express = require('express')
const router = express.Router()
const gitlabRest = require('../api/gitlab/gitlabRest')
const welcomeRest = require('../api/welcome/welcomeRest')
const i18nUtils = require('../utils/i18n')
const loggerUtils = require('../utils/logger')
const config = require('../config')

/* non auth routes */
router.use('/', welcomeRest)
router.use('/gitlab', gitlabRest)

/* static route for website */
router.use('/static', express.static(config.server.static))

router.use((req, res, next) => {
  return res
    .status(404)
    .send({ message: i18nUtils.translate('route_not_found %s', req.url) })
})

router.use((err, req, res, next) => {
  if (err) {
    loggerUtils.error(err)
    return res
      .status(500)
      .send({ message: i18nUtils.translate('system_error') })
  }
})

module.exports = router
