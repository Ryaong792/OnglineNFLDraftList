'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
require('./landing/cards.js')
require('./landing/tables.js')
const authEvents = require('./auth/events.js')
const footballEvents = require('./football/events.js')
const landingEvents = require('./landing/events.js')

$(() => {
  authEvents.addHandlers()
  footballEvents.addHandlers()
  landingEvents.addHandlers()
})
