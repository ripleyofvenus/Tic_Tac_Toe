'use strict'

const app = require('../app')
const game = require('./game')

const createGame = function (data) {
  console.log(app.user.token)
  return $.ajax({
    url: app.development + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const clickBox = (id) => {
  game.currentBoxId = id
  console.log('click me baby')
  let turn = game.xMove ? 'x' : 'o'
  // console.log(game)
  return $.ajax({
    url: app.development + '/games/' + game.currentGame,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': turn
        }
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  createGame,
  clickBox
}
