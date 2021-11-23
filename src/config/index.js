const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const templatesFolder = './src/templates'

const appConfig = {
  server: {
    port: process.env.HTTP_PORT || process.env.PORT || 5000,
    static: 'src/static'
  },
  upload: {
    maxSize: 5242880 // 5 * 1024 * 1024 = no larger than 5mb, you can change as needed.
  },
  baseEndpoint: '/',
  template: {
    showCompiled: process.env.SHOW_COMPILED_TEMPLATE || true,
    sql: {
      dir: templatesFolder + '/sql',
      ext: '.sql'
    },
    smtp: {
      dir: templatesFolder + '/smtp',
      ext: '.html'
    }
  },
  databases: {
    /* you can define multiple connections here */
    projectbox: {
      /*
        ** you can choose db client here ('mysql' / 'pg')
        Install postgres connector:
        $ npm install --save pg
        Install mysql connector:
        $ npm install --save mysql2
      */
      client: process.env.DB_CLIENT,
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema: process.env.DB_SCHEMA
      },
      debug: false,
      maxChunkSize: 2000,
      pool: {
        min: 0,
        max: 15
      },
      acquireConnectionTimeout: 10000
    }
  },
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
    timeout: 60000,
    responseType: 'json',
    defaultHeaders: {
      'Content-Type': 'application/json'
    }
  },
  gitlab: {
    projects: [
      {
        id: 851,
        name: 'ms-operacao',
        url: 'https://gitlab.softbox.com.br/papaleguas/ms-operacao',
        squad: 'planejamento'
      },
      {
        id: 837,
        name: 'ms-cadastro',
        url: 'https://gitlab.softbox.com.br/papaleguas/ms-cadastro',
        squad: 'planejamento'
      },
      {
        id: 690,
        name: 'Cashlink Indústria',
        url: 'https://gitlab.softbox.com.br/tribo-financeiro/cashlink-industria',
        squad: 'planejamento'
      },
      {
        id: 836,
        name: 'papaleguas-gateway',
        url: 'https://gitlab.softbox.com.br/papaleguas/papaleguas-gateway',
        squad: 'planejamento'
      },
      {
        id: 91,
        name: 'cashlink_war',
        url: 'https://gitlab.softbox.com.br/cashlink/cashlink_war',
        squad: 'planejamento'
      },
      {
        id: 989,
        name: 'pricing',
        url: 'https://gitlab.softbox.com.br/PRICING/pricing',
        squad: 'comercial'
      },
      {
        id: 259,
        name: 'portal-execucao',
        url: 'https://gitlab.softbox.com.br/portal-execucao/portal-execucao',
        squad: 'comercial'
      },
      {
        id: 1000,
        name: 'produtos-clientes',
        url: 'https://gitlab.softbox.com.br/PRICING/produtos-clientes',
        squad: 'comercial'
      },
      {
        id: 1066,
        name: 'vortex-java',
        url: 'https://gitlab.softbox.com.br/vortex/vortex-java',
        squad: 'comercial'
      },
      {
        id: 196,
        name: 'vortex-frontend',
        url: 'https://gitlab.softbox.com.br/vortex/vortex-frontend',
        squad: 'comercial'
      },
      {
        id: 358,
        name: 'solucao-certa',
        url: 'https://gitlab.softbox.com.br/solucao_certa/solucao-certa',
        squad: 'comercial'
      },
      {
        id: 750,
        name: 'gpc2',
        url: 'https://gitlab.softbox.com.br/tradelinks/gpc2',
        squad: 'trademarketing'
      },
      {
        id: 1167,
        name: 'gpc-frontend',
        url: 'https://gitlab.softbox.com.br/tradelinks/gpc-frontend',
        squad: 'trademarketing'
      }
    ]
  },
  slack: {
    squads: {
      planejamento: {
        name: 'Squad Planejamento Indústria',
        slackChannel: 'REMOVED
      },
      comercial: {
        name: 'Squad Comercial Indústria',
        slackChannel: 'REMOVED
      },
      trademarketing: {
        name: 'Squad Trade Marketing',
        slackChannel: 'REMOVED
      },
      tribo: {
        name: 'Tribo Soluções para o Mercado',
        slackChannel: 'REMOVED
      }
    }
  },
  swiftKanban: {
    baseURL: 'https://login.swiftkanban.com/restapi',
    squads: {
      planejamento: {
        authorizationToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwZXJzb25JZCI6MTQ3NTg2MSwiYXBwQWNjb3VudElkIjoxNTkwNzY3fQ.c7pvlcb-X6y5HliEdlF2tfTxynz-IpJVkOdXs_K8ZbQ',
        boardId: 1628485,
        lineToId: 1704022,
        columnToId: 2827389
      },
      comercial: {
        authorizationToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwZXJzb25JZCI6MTQ3NTg2MCwiYXBwQWNjb3VudElkIjoxNTkwNzY3fQ.9U_0LXNKkOplMa0i92_e7UU8As5ahiorwG0CXhQWWq8',
        boardId: 1628483,
        lineToId: 1706762,
        columnToId: 2825588
      }
    }
  }
}

module.exports = appConfig
