'use strict'

const events = require('./books/events')

$(() => {
  $('#get-books-button').on('click', events.onGetBooks)
})
