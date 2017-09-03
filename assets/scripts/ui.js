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

const signUpSuccess = (data) => {
  console.log(data)
  console.log('sign up success')
}

const signInSuccess = (data) => {
  console.log(data)
  console.log('sign in success')
  app.user = data.user
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

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
