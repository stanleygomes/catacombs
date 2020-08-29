const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const appConfig = {
  server: {
    port: process.env.PORT || 5000,
    static: 'src/static'
  },
  upload: {
    maxSize: 5242880 // 5 * 1024 * 1024 = no larger than 5mb, you can change as needed.
  },
  baseEndpoint: '/',
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  },
  i18n: {
    locales: [
      'pt-BR',
      'en'
    ],
    defaultLocale: 'pt-BR',
    directory: path.join(__dirname, '/i18n-locales'),
    autoReload: true
  },
  privateKey: process.env.APP_KEY,
  request: {
    baseUrl: '',
    timeout: 1000,
    responseType: 'json',
    defaultHeaders: {
      'Content-Type': 'application/json'
    }
  }
}

module.exports = appConfig
