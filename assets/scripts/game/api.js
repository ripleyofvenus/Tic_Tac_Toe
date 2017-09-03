'use strict'

const app = require('../app')
const game = require('./game')

const createGame = function () {
  return $.ajax({
    url: app.development + '/games',
    method: 'POST',
    data: '{}',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  createGame
}
