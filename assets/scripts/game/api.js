'use strict'

const config = require('./../config')
const game = require('./game')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + config.user.token
    }
  })
}

const clickBox = (id) => {
  game.currentBoxId = id
  const turn = game.xMove ? 'x' : 'o'
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.currentGame,
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
      Authorization: 'Token token=' + config.user.token
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + config.user.token
    }
  })
}

module.exports = {
  createGame,
  clickBox,
  getGames
}
