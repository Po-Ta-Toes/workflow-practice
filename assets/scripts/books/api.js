'use strict'

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBooks
}
