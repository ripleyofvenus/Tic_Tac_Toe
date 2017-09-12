'use strict'

const app = require('../app')
const game = require('./game')

const createGame = function (data) {
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
  let turn = game.xMove ? 'x' : 'o'
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

const getGames = function () {
  return $.ajax({
    url: app.development + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  createGame,
  clickBox,
  getGames
}
