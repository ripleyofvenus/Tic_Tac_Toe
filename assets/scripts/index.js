'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game.js')
const authEvents = require('./auth/events.js')

$(() => {
  $('#playGame').on('click', gameEvents.onMove)
})
