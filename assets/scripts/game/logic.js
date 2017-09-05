'use strict'

const game = require('./game')
const ui = require('../ui')
const app = require('../app')
const events = require('./events')

let turn = 'X'
let gameBoardArray = game.gameBoardArray
let hasWin = false
let hasDraw = false

const gameReset = () => {
  game.currentBoxId = null
  game.currentGame = null
  game.xMove = true
  game.currentGameMoves = 0
  game.gameBoardArray = ['', '', '', '', '', '', '', '', '']
}

const move = function (event) {
  let id = event.target.attributes[1].value
  if (game.xMove === true) {
    console.log('x & o')
    $("[data-id=" + id + "]").html('<span>X</span>')
    game.gameBoardArray[parseInt(id)] = 'X'
    game.xMove = false
  } else if (game.xMove === false) {
    console.log('x & o 2')
    $("[data-id=" + id + "]").html('<span>O</span>')
    game.gameBoardArray[parseInt(id)] = 'O'
    game.xMove = true
  }
  console.log(game.gameBoardArray)
}

const isValidMove = (id) => {
  const valid = !(event.target.attributes[1].value === '')
  // // if the move is valid, update the game data ASAP
  // // fixes bug? where double clicking swaps game token
  if (valid) {
    event.target.attributes[1].value = game.xMove ? 'x' : 'o'
  }
  else {
    ui.moveFailure(id)
  }
}

const checkRow = function (a, b, c, turn) {
  console.log('checkRow()')
  console.log(gameBoardArray)
  let result = false
  if (gameBoardArray[a] === turn && gameBoardArray[b] === turn &&
    gameBoardArray[c] === turn) {
    result = true
  }
  return result
}

const checkWin = function (turn) {
  console.log('checkWin()')
  // console.log(gameArray)
  // console.log(turn)
  let result = false
  if (checkRow(0, 1, 2, turn) ||
     checkRow(3, 4, 5, turn) ||
     checkRow(6, 7, 8, turn) ||
     checkRow(0, 3, 6, turn) ||
     checkRow(1, 4, 7, turn) ||
     checkRow(2, 5, 8, turn) ||
     checkRow(0, 4, 8, turn) ||
     checkRow(2, 4, 6, turn) ||
     checkRow(0, 4, 8, turn)) {
    result = true
    hasWin = true
    console.log('When you play against yourself, you always win')
  }
  return updateGame
}

const checkDraw = function () {
  if (gameBoardArray[0] !== '' && gameBoardArray[1] !== '' && gameBoardArray[2] !== '' &&
  gameBoardArray[3] !== '' && gameBoardArray[4] !== '' && gameBoardArray[5] !== '' &&
  gameBoardArray[6] !== '' && gameBoardArray[7] !== '' && gameBoardArray[8] !== '') {
    console.log('If nobody loses, who wins?')
    hasDraw = true
  }
  return updateGame
}

const updateGame = (data) => {
  game.currentGame = data.game
  console.log('Game data stored')
  return gameReset
}

module.exports = {
  turn,
  move,
  isValidMove,
  checkRow,
  checkWin,
  checkDraw,
  updateGame,
  gameReset
}
