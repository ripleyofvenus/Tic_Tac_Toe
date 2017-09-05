'use strict'

const game = require('./game')
const ui = require('../ui')
const app = require('../app')
const events = require('./events')

let turn = 'X'
// let hasWinner = false
// let hasDraw = false

const move = function (event) {
  if (game.xMove === true) {
    console.log('x & o')
    $("[data-id=" + event.target.attributes[1].value + "]").html('<span>X</span>')
    game.xMove = false
  } else if (game.xMove === false) {
    console.log('x & o 2')
    $("[data-id=" + event.target.attributes[1].value + "]").html('<span>O</span>')
    game.xMove = true
  }
}

const checkBox3 = () => {
  let box3Contents = $("[data-id=" + "3" + "]").text()
  // put your actual $() based reading code here, for box 3 specifically
  if (box3Contents === 'X') {
    console.log("box 3 contains an x")
  } else if (box3Contents === 'O') {
    console.log("box 3 contains an o")
  } else if (!box3Contents) {
    console.log("this box is empty")
  }
}

const isValidMove = (id) => {
  let valid = !(game.currentGame.box[id] && !game.currentGame.over)
  // // if the move is valid, update the game data ASAP
  // // fixes bug where double clicking swaps game token
  if (valid) {
    game.currentGame.box[id] = game.xMove ? 'x' : 'o'
  }
  return valid
}

const updateGame = (data) => {
  game.currentGame = data.game
}

module.exports = {
  turn,
  move,
  isValidMove,
  updateGame,
  checkBox3
  // hasWinner,
  // hasDraw
}
