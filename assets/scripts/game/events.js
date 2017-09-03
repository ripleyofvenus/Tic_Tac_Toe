'use strict'
const api = require('./api')
const ui = require('../ui')
const getFormFields = require('../../../lib/get-form-fields')
// const logic = require('./logic')

const onCreateGame = function (event) {
  console.log('does oncreategame work?')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('create game works')
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame)
}

module.exports = {
  addHandlers
}
