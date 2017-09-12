'use strict'

const app = require('./app')
const game = require('./game/game')

// Auth Success

const success = (data) => {
  console.log(data)
  console.log('success')
}

const failure = () => {
  console.log('Sorry, I cannot do that')
}

// Auth Ui

const signUpSuccess = (data) => {
  console.log('Sign Up Success')
  $('#sign-up').hide()
}

const signUpFailure = () => {
  console.log('Sign Up failed... try again?')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log('Sign In Success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
}

const signInFailure = () => {
  console.log('Sign In failed... try again?')
}

const signOutSuccess = (data) => {
  app.user = null
  console.log('Sign Out Success')
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

const changePasswordFail = () => {
  console.log('Change Password Unsuccessful. Try Again.')
}

//  Game Ui

const createGameSuccess = (data) => {
  // console.log('new game event 3')
  // $('.box').on()
  // console.log('new game event 4')
  $('.box').text('')
  $('.gameboard').show()
  $('#reset-game').show()
  $('#game-wins').show()
  $('#change-password').show()
}

const createGameFailure = function () {
  console.log('failed before ever even starting...')
}

const moveFailure = function () {
  console.log('try a different box')
}

const showWins = (data) => {
  console.log('you have played ' + data.games.length + ' times')
}

const winGame = function () {
  // $('.box').off()
  console.log('When you play against yourself, you always win')
}

const gameDraw = function () {
  console.log('If nobody loses, who wins?')
}

const newGame = function () {
  console.log('New Game')
}

module.exports = {
  success,
  failure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFail,
  createGameSuccess,
  createGameFailure,
  moveFailure,
  showWins,
  winGame,
  gameDraw,
  newGame
}
