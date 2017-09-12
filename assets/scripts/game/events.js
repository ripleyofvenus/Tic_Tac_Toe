'use strict'
const api = require('./api')
const ui = require('../ui')
const game = require('./game')
const getFormFields = require('../../../lib/get-form-fields')
const logic = require('./logic')

const newGame = function () {
  // console.log('new game event')
  // ui.newGame()
  $('#new-game').on('click', onCreateGame)
}

const onCreateGame = function (event) {
  console.log('new game event')
  ui.newGame()
  event.preventDefault()
  game.gameBoardArray = ['', '', '', '', '', '', '', '', '']
  console.log('new game event 1')
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(onGameCreated)
    .catch(ui.createGameFailure)
}

const onGameCreated = (data) => {
  game.currentGame = data.game.id
  console.log(game.gameBoardArray)
  console.log('new game event 2')
  ui.createGameSuccess()
}

const onClickBox = (event) => {
  api.clickBox(event.target.attributes[1].value)
  // $(this).off()
  logic.move(event)
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
  $('#game-wins').on('submit', onGetWins)
}

module.exports = {
  addHandlers,
  onGameCreated,
  newGame
}
