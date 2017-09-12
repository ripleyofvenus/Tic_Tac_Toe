'use strict'
const api = require('./api')
const ui = require('../ui')
const game = require('./game')
const getFormFields = require('../../../lib/get-form-fields')
const logic = require('./logic')

const onGameCreated = (data) => {
  game.currentGame = data.game.id
  ui.createGameSuccess(data)
}

const onCreateGame = function (event) {
  console.log('does oncreategame work?')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('create game works')
  api.createGame(data)
    .then(onGameCreated)
    .catch(ui.createGameFailure)
}

const onClickBox = (event) => {
  console.log('did you click a box?')
  api.clickBox(event.target.attributes[1].value)
  console.log('yes')
  $(this).off()
  logic.move(event)
}

const resetGame = (event) => {
  console.log('reset game')
  event.preventDefault()
  $('.box').on('click', onClickBox)
  logic.reset()
}

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame)
  $('.box').on('click', onClickBox)
  $('#reset-game').on('click', resetGame)
}

module.exports = {
  addHandlers,
  onGameCreated
}
