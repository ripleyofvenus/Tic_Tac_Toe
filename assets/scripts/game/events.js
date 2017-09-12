'use strict'
const api = require('./api')
const ui = require('../ui')
const game = require('./game')
const getFormFields = require('../../../lib/get-form-fields')
const logic = require('./logic')

const onGameCreated = (data) => {
  game.currentGame = data.game.id
  ui.createGameSuccess()
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(onGameCreated)
    .catch(ui.createGameFailure)
}

const onClickBox = (event) => {
  api.clickBox(event.target.attributes[1].value)
  $(this).off()
  logic.move(event)
}

const resetGame = (event) => {
  event.preventDefault()
  $('.box').on('click', onClickBox)
  logic.reset()
}

const onGetWins = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.showWins)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame)
  $('.box').on('click', onClickBox)
  $('#reset-game').on('click', resetGame)
  $('#game-wins').on('submit', onGetWins)
}

module.exports = {
  addHandlers,
  onGameCreated
}
