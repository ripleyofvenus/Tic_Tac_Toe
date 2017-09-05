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

const onClickBox = (event) => {
  console.log('did you click a box?')
  console.log(event.target.attributes[1])
  api.clickBox(event.target.attributes[1])
}

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame)
  console.log('how many times does this happen')
  $('.box').on('click', onClickBox)
}

module.exports = {
  addHandlers
}
