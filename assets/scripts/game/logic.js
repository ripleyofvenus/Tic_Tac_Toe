'use strict'

const game = require('./game')
const ui = require('../ui')
const app = require('../app')

const isValidMove = (id) => {
  // let valid = !(game.currentGame.cell[id] && !game.currentGame.over)
  // // if the move is valid, update the game data ASAP
  // // fixes bug where double clicking swaps game token
  // if (valid) {
  game.currentGame.cells[id] = game.xMove ? 'x' : 'o'
  // }
  // return valid
}

const updateGame = (data) => {
  game.currentGame = data.game
}

module.exports = {
  isValidMove,
  updateGame
}
