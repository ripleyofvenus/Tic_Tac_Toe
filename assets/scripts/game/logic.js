'use strict'

const game = require('./game')
// const ui = require('../ui')
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
  const id = event.target.attributes[1].value
  console.log(game.gameBoardArray[parseInt(id)])
  const isValidMove = (game.gameBoardArray[parseInt(id)] === '')
  // let gameOver = false
  if (isValidMove === true && game.xMove === true) {
    $('[data-id=' + id + ']').html('<span>X</span>')
    game.gameBoardArray[parseInt(id)] = 'X'
    checkDraw()
    game.xMove = false
  } else if (isValidMove === true && game.xMove === false) {
    $('[data-id=' + id + ']').html('<span>O</span>')
    game.gameBoardArray[parseInt(id)] = 'O'
    checkDraw()
    game.xMove = true
  } else if (isValidMove !== true) {
    console.log('try another box')
    // ui.moveFailure(error)
    console.log(game.gameBoardArray)
  }
  //
  // const winner = game.checkWin()
  // if (winner) {
  //   console.log('When you play against yourself, you always win')
  //   // gameOver = true
  // } else {
  //   if (game.checkDraw(game.gameBoardArray)) {
  //     console.log('If nobody loses, who wins?')
  //     // gameOver = true
  //   }
  // }
}

// game.game.prototype.checkForDraw = function () {
//   // game is over when all boxes are full
//   return this.box.join('').length === 9
// }
//
// const checkRow = function (a, b, c, turn) {
//   console.log('checkRow')
//   let result = false
//   if (gameBoardArray[a] === turn && gameBoardArray[b] === turn &&
//     gameBoardArray[c] === turn) {
//     result = true
//   }
//   return result
// }

// const checkWin = function (turn) {
//   console.log('checkWin()')
//   // console.log(gameArray)
//   // console.log(turn)
//   let result = false
//   if (checkRow(0, 1, 2, turn) ||
//      checkRow(3, 4, 5, turn) ||
//      checkRow(6, 7, 8, turn) ||
//      checkRow(0, 3, 6, turn) ||
//      checkRow(1, 4, 7, turn) ||
//      checkRow(2, 5, 8, turn) ||
//      checkRow(0, 4, 8, turn) ||
//      checkRow(2, 4, 6, turn) ||
//      checkRow(0, 4, 8, turn)) {
//     result = true
//     hasWin = true
//     console.log('When you play against yourself, you always win')
//   }
//   return updateGame
// }

const checkDraw = function () {
  console.log('checkDraw works')
  if (game.gameBoardArray[0] !== '' && game.gameBoardArray[1] !== '' && game.gameBoardArray[2] !== '' &&
  game.gameBoardArray[3] !== '' && game.gameBoardArray[4] !== '' && game.gameBoardArray[5] !== '' &&
  game.gameBoardArray[6] !== '' && game.gameBoardArray[7] !== '' && game.gameBoardArray[8] !== '') {
    console.log('If nobody loses, who wins?')
    hasDraw = true
  }
  return updateGame
}

const updateGame = (data) => {
  game.currentGame = data.game
  console.log('Game data stored')
}

module.exports = {
  turn,
  move,
  // checkRow,
  // checkWin,
  checkDraw,
  updateGame,
  gameReset
}
