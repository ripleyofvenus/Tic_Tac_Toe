'use strict'
const config = require('./../config')
// const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + config.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + config.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + config.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + config.user.token
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
