'use strict'

const app = require('./app')
const game = require('./game/game')

// Auth Success

const success = (data) => {
  $('#message').text('We did it! Success is sweet.').fadeIn(300).delay(1500).fadeOut(400)
}

const failure = () => {
  $('#message').text('Sorry, I cannot do that').fadeIn(300).delay(1500).fadeOut(400)
}

// Auth Ui

const signUpSuccess = (data) => {
  $('#message').text('Successfully signed up').fadeIn(300).delay(1500).fadeOut(400)
  $('#sign-up').hide()
}

const signUpFailure = () => {
  $('#message').text('Sign Up failed... try again?').fadeIn(300).delay(1500).fadeOut(400)
}

const signInSuccess = (data) => {
  app.user = data.user
  $('#message').text('Sign In Success').fadeIn(300).delay(1500).fadeOut(400)
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
  $('#change-password').show()
}

const signInFailure = () => {
  $('#message').text('Sign In failed... try again?').fadeIn(300).delay(1500).fadeOut(400)
}

const signOutSuccess = (data) => {
  app.user = null
  $('#message').text('Sign Out Success').fadeIn(300).delay(1500).fadeOut(400)
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
  $('#message').text('Password successfully changed.').fadeIn(300).delay(1500).fadeOut(400)
}

const changePasswordFail = () => {
  $('#message').text('Change Password Unsuccessful. Try Again.').fadeIn(300).delay(1500).fadeOut(400)
}

//  Game Ui

const createGameSuccess = (data) => {
  $('.box').text('')
  $('.gameboard').show()
  $('#reset-game').show()
  $('#game-wins').show()
}

const createGameFailure = function () {
  $('#message').text('Failed before ever even starting... Click New Game!').fadeIn(300).delay(1500).fadeOut(400)
}

const moveFailure = function () {
  $('#message').text('try a different box').fadeIn(300).delay(1500).fadeOut(400)
}

const showWins = (data) => {
  $('#message').text('You have played ' + data.games.length + ' games').fadeIn(300).delay(1500).fadeOut(400)
}

const winGame = function () {
  $('#message').text('When you play against yourself, you always win. Click New Game to play again!').fadeIn(300).delay(1500).fadeOut(400)
}

const gameDraw = function () {
  $('#message').text('If nobody loses, who wins?').fadeIn(300).delay(1500).fadeOut(400)
}

const newGame = function () {
  $('#message').text('Play on!').fadeIn(300).delay(1500).fadeOut(400)
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
