'use strict'

const app = require('../app')
const game = require('./game')

const createGame = function (data) {
  console.log(app.user.token)
  return $.ajax({
    url: app.development + '/games',
    method: 'POST',
    data: '{}',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const clickBox = function (id, turn) {
  console.log('click me baby')
  return $.ajax({
    url: app.development + '/games/' + game.currentBoxId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': move
        }
      },
      headers: {
        Authorization: 'Token token=' + app.user.token
      }
    }
  })
}

module.exports = {
  createGame,
  clickBox
}
