const ui = require('./ui')
const api = require('./api')

const onGetBooks = event => {
  event.preventDefault()

  api.getBooks()
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}

module.exports = {
  onGetBooks
}
