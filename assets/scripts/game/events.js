'use strict'
const api = require('./api')
const ui = require('../ui')
const game = require('./game')
const getFormFields = require('../../../lib/get-form-fields')
const logic = require('./logic')
const store = require('../store')

const newGame = function () {
  $('#new-game').on('click', onCreateGame)
}

const onCreateGame = function (event) {
  ui.newGame()
  event.preventDefault()
  store.gameOver = false
  game.xMove = true
  game.gameBoardArray = ['', '', '', '', '', '', '', '', '']
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(onGameCreated)
    .catch(ui.createGameFailure)
}

const onGameCreated = (data) => {
  game.currentGame = data.game.id
  ui.createGameSuccess()
}

const onClickBox = (event) => {
  const id = event.target.attributes[1].value
  if (store.gameOver === true) {
    ui.createGameFailure()
  } else if (store.gameOver !== true && game.gameBoardArray[parseInt(id)] !== '') {
    ui.moveFailure()
  } else {
    api.clickBox(event.target.attributes[1].value)
    logic.move(event)
  }
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.showGames)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame)
  $('.box').on('click', onClickBox)
  $('#get-games').on('submit', onGetGames)
}

module.exports = {
  addHandlers,
  onGameCreated,
  newGame
}
