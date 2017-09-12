'use strict'

const app = require('./app')
const game = require('./game/game')

// Auth Success

const success = (data) => {
  console.log(data)
  console.log('success')
}

const failure = (error) => {
  console.error(error)
  console.log('failure')
}

// Auth Ui

const signUpSuccess = (data) => {
  $('#sign-up').hide()
}

const signInSuccess = (data) => {
  app.user = data.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
}

const signOutSuccess = (data) => {
  app.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.gameboard').hide()
  $('#reset-game').hide()
  $('#game-wins').hide()
  $('#new-game').hide()
  $('#change-password').hide()
}

const changePasswordSuccess = () => {
  console.log('Password successfully changed.')
}

//  Game Ui

const createGameSuccess = (data) => {
  $('.gameboard').show()
  $('#reset-game').show()
  $('#game-wins').show()
  $('#change-password').show()
  $('#new-game').hide()
}

const createGameFailure = function (error) {
  console.error(error)
  console.log('failed before ever even starting...')
}

const moveFailure = function (error) {
  console.error(error)
  console.log('try a different box, dummy')
}

const printGames = (data) => {
  console.log(data.games.length)
}

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  createGameSuccess,
  createGameFailure,
  moveFailure,
  printGames
}
