'use strict'

const game = require('./game')
const api = require('./api')
const app = require('../app')
const events = require('./events')
const store = require('../store')

let gameBoardArray = game.gameBoardArray
let hasDraw = false

const move = function (event) {
  const id = event.target.attributes[1].value
  console.log(game.gameBoardArray[parseInt(id)])
  const isValidMove = (game.gameBoardArray[parseInt(id)] === '')
  // let gameOver = false
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
    console.log('try another box')
    // ui.moveFailure(error)
    console.log(game.gameBoardArray)
  }
}

const checkRow = function (a, b, c, currentmove) {
  console.log('checkrow1')
  let result = false
  const id = event.target.attributes[1].value
  let currentMove = game.gameBoardArray[parseInt(id)]
  if (gameBoardArray[a] === currentMove && gameBoardArray[b] === currentMove &&
    gameBoardArray[c] === currentMove) {
    result = true
    $('.box').off()
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
    console.log('When you play against yourself, you always win')
    $('.box').off()
  }
  return result
}

const checkDraw = function () {
  console.log('checkDraw works')
  if (game.gameBoardArray[0] !== '' && game.gameBoardArray[1] !== '' && game.gameBoardArray[2] !== '' &&
  game.gameBoardArray[3] !== '' && game.gameBoardArray[4] !== '' && game.gameBoardArray[5] !== '' &&
  game.gameBoardArray[6] !== '' && game.gameBoardArray[7] !== '' && game.gameBoardArray[8] !== '') {
    console.log('If nobody loses, who wins?')
    hasDraw = true
  }
}

const reset = function (event) {
  console.log('Reset')
  game.xMove = true
  game.gameBoardArray = ['', '', '', '', '', '', '', '', '']
  store.gameOver = false
  $('.box').text('')
  console.log(game.gameBoardArray)
  newGame()
}

const newGame = function () {
  if (store.gameOver === false) {
    $('.box').on('click', move())
  }
}

module.exports = {
  move,
  checkRow,
  checkWin,
  checkDraw,
  reset,
  newGame
}
