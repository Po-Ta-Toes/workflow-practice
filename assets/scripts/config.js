'use strict'

let apiUrl
const apiUrls = {
  production: 'https://wdi-library-api.heroku.com',
  development: 'https://wdi-library-api.heroku.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
