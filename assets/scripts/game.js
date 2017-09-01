'use strict'

$('.box').on('click', function () {
  console.log('You clicked a box!')
})

$(document).ready(function()){

  //LAYOUT BOARD AND DEFINE PLAYERS
const boardArray = [null, null, null, null, null, null, null, null, null]
const win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
let lastMove = 'X'
let counterX = 0
let counterO = 0

$('.box').on('click', inputBoard)
$('.box').on('click', getClickInArray)
$('.clear').on('click', clearGame)

function getClickInArray(i) {
  $(i.currentTarget).off('click', getClickInArray)
    let inputArray = (i.currentTarget.id)
    game[inputArray] = lastMove
    console.log(game)
    alterPlayer()

    console.log('O' + checkWin('O'))
    console.log('X' + checkWin('X'))
    showWinner()
    showDraw()
}
function alterPlayer () {
    if(lastMove === 'X') {
      lastMove = 'O'
      $('.name').text('O')
    } else {
      lastMove = 'X'
      $('.name').text('X')
    }
  }

function checkWin (winnerPlayer) {
 return answers.some(function(element, index) {
   // console.log(debugger);
   // debugger
   return element.every(function(value, position) {
     // console.log("______");
     // console.log(game[value]);
     // console.log(winnerPlayer);
     // console.log((winnerPlayer === game[value]));
     // console.log('array'+game);
       return (winnerPlayer === game[value])
     }) // element.every
   }) // answers.some
 }// checkWin

function showWinner () {
   // console.log('hello');
   if (checkWin('O')) {
     counter_O ++ //<--- Add +1 to the counter variable
     counterO() //<--- Add +1 to the counter display
     popWinnerO() //<--- Show O as winner
   } else if (checkWin('X')) {
     counter_X ++ //<--- Add +1 to the counter variable
    counterX() //<--- Add +1 to the counter display
    popWinnerX() //<--- Show X as winner
  }
}//showWinner

function showDraw () {
   // console.log('hello');
   let result = game.filter(function(move){
     return move
   })
   if (game.length === result.length){
     popDraw() //<--- Show pop up draw
     }
   }//// showDraw

function clearGame () {
     game = [null, null, null, null, null, null, null, null, null] //<--- Clear variable
     answers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]] //<--- Set answer to default value
     lastMove = 'X'
     $('.box').text('') //<--- Clear all board display
     $('.name').text(lastMove) //<--- Clear the next move player
     $('.box').on('click', inputBoard) //<--- Enable again the clicks
     $('.box').on("click", getClickInArray) //<--- Enable again the clicks
     $('.win').css('visibility', 'hidden') //<--- Clear the win pop up
     $('.draw').css('visibility', 'hidden') //<--- Clear the win pop up
   }//clearGame
function inputBoard (i) {
  $(i.currentTarget).off('click', inputBoard)
  $(i.currentTarget).text(lastMove)
}//inputBoard

//winner O
function popWinnerO () {
  $('.winner').text('O')
  $('.win').css('visibility', 'visible')
}
//winner X
function popWinnerX () {
  $('.winner').text('X')
  $('.win').css('visibility', 'visible')
}

//draw
function popDraw () {
  $('.draw').css('visibility', 'visible')
  }
//scoreboard
function counterX () {
  $('.player_x').text(counter_X)
  }
function counterO () {
  $('.player_o').text(counter_O)
  }
} //document. ready

//button to show turns
  $('#turnX').click(function(){
    player1 = 'O'
    player2 = 'X'
    $('#turnX').removeClass('btn-primary')
    $('#turnO').addClass('btn-primary')
  })
  $('#turnO').click(function(){
    player1 = 'X'
    player2 = 'O'
    $('#turnO').removeClass('btn-primary')
    $('#turnX').addClass('btn-primary')
    })
  }
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
//
// find below the Solution to API Auth
// 'use strict';
//
// const authEvents = require('./auth/events.js');
//
// // On document ready
// $(() => {
//   authEvents.addHandlers();
// });



//ON CLICK FUNCTION 'X' OR 'O'
//const onClickSquare = function () {
// event.preventDefault()
// if (player === 'x') {
//   $(this).text('X')
// } else {
//   $(this).text('O')
// }

// GAME HANDLER FUNCTION ON CLICK SQUARE
// const addGameHandler = function () {
//   $('.square').on('click', onClickSquare)
// }
