'use strict'

const game = require('./game')
const api = require('./api')
const app = require('../app')
const events = require('./events')
const store = require('../store')
const ui = require('../ui')

// let gameBoardArray = game.gameBoardArray
let hasDraw = false

const move = function (event) {
  const id = event.target.attributes[1].value
  const isValidMove = (game.gameBoardArray[parseInt(id)] === '')
  if (isValidMove === true && game.xMove === true) {
    $('[data-id=' + id + ']').html('<span>X</span>')
    game.gameBoardArray[parseInt(id)] = 'X'
    checkDraw()
    checkWin()
    game.xMove = false
  } else if (isValidMove === true && game.xMove === false) {
    $('[data-id=' + id + ']').html('<span>O</span>')
    game.gameBoardArray[parseInt(id)] = 'O'
    checkDraw()
    checkWin()
    game.xMove = true
  } else if (isValidMove !== true) {
    ui.moveFailure()
  }
}

const checkRow = function (a, b, c, currentmove) {
  let result = false
  const id = event.target.attributes[1].value
  let currentMove = game.gameBoardArray[parseInt(id)]
  if (game.gameBoardArray[a] === currentMove && game.gameBoardArray[b] === currentMove &&
    game.gameBoardArray[c] === currentMove) {
    result = true
  }
  return result
}

const checkWin = function (currentmove) {
  let result = false
  const id = event.target.attributes[1].value
  let currentMove = game.gameBoardArray[parseInt(id)]
  if (checkRow(0, 1, 2, currentMove) ||
     checkRow(3, 4, 5, currentMove) ||
     checkRow(6, 7, 8, currentMove) ||
     checkRow(0, 3, 6, currentMove) ||
     checkRow(1, 4, 7, currentMove) ||
     checkRow(2, 5, 8, currentMove) ||
     checkRow(0, 4, 8, currentMove) ||
     checkRow(2, 4, 6, currentMove) ||
     checkRow(0, 4, 8, currentMove)) {
    result = true
    store.gameOver = true
    $('.box').off()
    ui.winGame()
  }
  return result
}

const checkDraw = function () {
  if (game.gameBoardArray[0] !== '' && game.gameBoardArray[1] !== '' && game.gameBoardArray[2] !== '' &&
  game.gameBoardArray[3] !== '' && game.gameBoardArray[4] !== '' && game.gameBoardArray[5] !== '' &&
  game.gameBoardArray[6] !== '' && game.gameBoardArray[7] !== '' && game.gameBoardArray[8] !== '') {
    ui.gameDraw()
    hasDraw = true
  }
}

const reset = function (event) {
  game.xMove = true
  game.gameBoardArray = ['', '', '', '', '', '', '', '', '']
  store.gameOver = false
  $('.box').text('')
  newGame()
}

const newGame = function () {
  $('#new-game').on('click', events.onCreateGame)
  ui.newGame()
}

module.exports = {
  move,
  checkRow,
  checkWin,
  checkDraw,
  reset,
  newGame
}
