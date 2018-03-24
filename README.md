# Neocratia Website

Project for neocratia.org website. Client web application developed with:

> Nuxt.js + Vuetify.js project

## Project setup

* Create a firebase endpoint with writing access
* Clone the repository in a folder
* In the root of the folder create a .env file and put the following contents inside:

``` bash
FIREBASE_URL=https://***.firebaseio.com
MAILGUN_DOMAIN=neocratia.org
MAILGUN_API_KEY=***
DEFAULT_FROM_EMAIL=***
DEFAULT_TO_EMAIL=***
API_URL=http://localhost:8000
```

* Run development server with

``` bash
npm run dev
```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [Vuetify.js](https://vuetifyjs.com/) documentation.
