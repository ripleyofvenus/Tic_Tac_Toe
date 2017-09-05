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
  // $("[data-id=" + event.target.attributes[1].value + "]").html('<span>x</span>')
  console.log('yes')
  logic.move(event)
}

const onCheckBox3 = (event) => {
  console.log('onCheckBox3')
  event.preventDefault()
  logic.checkBox3()
}

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame)
  console.log('how many times does this happen')
  $('.box').on('click', onClickBox)
  $('#checkBox3').on('click', onCheckBox3)
}

module.exports = {
  addHandlers,
  onGameCreated
}
