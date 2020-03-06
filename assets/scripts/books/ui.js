'use strict'

const showBooksTemplate = require('../templates/all-books.handlebars')

const onGetBooksSuccess = data => {
  const showBooksHtml = showBooksTemplate({ books: data.books })

  $('.books-container').html(showBooksHtml).css('background-color', 'white')
}

const onGetBooksFailure = () => {
  $('.message').text('FAILURE').css('color', 'red')

  setTimeout(() => {
    $('.message').text('Try again!').css('color', 'white')
  }, 3000)
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
