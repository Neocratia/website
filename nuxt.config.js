require('dotenv').config();

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Neocratia',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Let\'s reinvent the way our laws are created.' // FIXME
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/neo.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Muli:300,400,500,700|Material+Icons',
        // integrity: 'sha384-Kxn4Ze+7DXJJcTOeVzTK8XzFNaebaVL41nY4cYLje9DU6/ChphZtWh/nu+925Szu',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css',
        integrity: 'sha384-NWR7tyUSPWhdW2+LEk+AIUBeuaYSuSVqWnAOkUTZzeMZA5IFw/SzFcpkUnDCjnu8',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#9c27b0'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vuetify', 'firebase']
  },
  plugins: ['~plugins/vuetify.js', '~plugins/firebase.js'],
  css: [{
    src: '~assets/style/app.styl',
    lang: 'styl'
  }],
  env: {
    firebase_url: process.env.FIREBASE_URL
  }
}
