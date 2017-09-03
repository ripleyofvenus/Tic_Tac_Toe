'use strict'
const app = require('../app')
// const store = require('../store')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.development + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.development + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: app.development + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: app.development + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
