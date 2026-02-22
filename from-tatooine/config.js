const config = {
  googleAnalytics : {
    code: 'G-ZSEG5MCV2Y'
  },
  colorTheme: {
    light: {
      color: '#d46159'
    },
    dark: {
      color: '#282c35'
    }
  },
  manifest: {
    'name': 'From Tatooine',
    'short_name': 'From Tatooine',
    'start_url': '/',
    'background_color': '#ffffff',
    'theme_color': '#ffffff',
    'display': 'standalone',
    'icon': 'src/assets/icon-tatooine.png',
    'theme_color_in_head': false
  },
  metadata: {
    title: 'From Tatooine',
    author: 'Stanley Gomes',
    description: 'News from the two suns planet. 🌕 📚 📝',
    siteUrl: 'https://from-tatooine.web.app',
    social: {
      twitter: '',
      instagram: 'stanley.gomes',
      linkedin: 'stanley-gomes',
      github: 'stanleygomes'
    }
  }
}

module.exports = config
