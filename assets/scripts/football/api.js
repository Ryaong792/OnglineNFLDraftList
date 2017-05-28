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
// ************* WR Get request API *******************
const indexWrs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/wrs',
    method: 'GET'
  })
}
// ************* TE Get request API *******************
const indexTes = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/tes',
    method: 'GET'
  })
}

module.exports = {
  indexQbs,
  indexRbs,
  indexWrs,
  indexTes
}
