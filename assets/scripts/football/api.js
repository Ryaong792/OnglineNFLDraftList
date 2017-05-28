'use strict'
const config = require('../config')

// ************* QB Get request API *******************
const indexQbs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/qbs',
    method: 'GET'
  })
}
// ************* RB Get request API *******************
const indexRbs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/rbs',
    method: 'GET'
  })
}

module.exports = {
  indexQbs,
  indexRbs
}
