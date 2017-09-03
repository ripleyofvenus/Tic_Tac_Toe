'use strict'

const app = require('./app')
// const store = require('./store')

// const game = require('./game/game')

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
  console.log(data)
  console.log('sign up success')
}

const signInSuccess = (data) => {
  console.log(data)
  console.log('sign in success')
  app.user = data.user
  console.log(app)
}

const signOutSuccess = (data) => {
  console.log(data)
  console.log('sign out success')
  app.user = null
  console.log(app.user)
}

const changePasswordSuccess = () => {
  console.log('Password successfully changed.')
}

//  Game Ui

const createGameSuccess = () => {
  console.log('Game on!')
}

const createGameFailure = function (error) {
  console.error(error)
  console.log('failed before ever even starting...')
}

const moveFailure = function (error) {
  console.error(error)
  console.log('try a different box, dummy')
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
  moveFailure
}
