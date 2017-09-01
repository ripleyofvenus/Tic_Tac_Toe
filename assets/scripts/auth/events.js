// Events handlers for login/logout/signup/changepassword
'use strict';

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('../ui')
const gameEvents = require('../game/events')

const onSignUp = (event) => {
  event.preventDefault();
  let signUpData = getFormFields(event.target);
  api.signUp(signUpData)
  .done(ui.signInSuccess);
  .fail(ui.signUpFail);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess);
  .fail(ui.signInFail);
};

const onSignOut = => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .done(ui.signOutSuccess);
  .fail(ui.signOutFail);
};

const onChangePassword = => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess);
  .fail(ui.changePasswordFail);
};

// const onAuthOptions = () => {
//  ui.onAuthOptions();
// };

//  const onChangePassword = () => {
//  ui.onChangePassword();
}


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  // $('.sign-up-link').on('submit', onAuthOptions);
  // $('.change-password-link').on('submit', onChangePassword);
}

module.exports = {
  addHandlers,
};
