'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('../ui')
// const gameEvents = require('../game/events')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn')
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut')
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSucess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('onChangePassword')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .catch(ui.fail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
