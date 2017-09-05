'use strict'

const app = require('../app')
const game = require('./game')

const gameReset = () => {
  game.currentBoxId = null,
  game.currentGame = null,
  game.xMove = true,
  game.currentGameMoves = 0
}

const createGame = function (data) {
  console.log(app.user.token)
  gameReset()
  return $.ajax({
    url: app.development + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const clickBox = function (id) {
  game.currentBoxId = id
  console.log('click me baby')
  let turn = game.xTurn ? 'x' : 'o'
  return $.ajax({
    url: app.development + '/games/' + game.currentBoxId,
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
  clickBox,
  gameReset
}
