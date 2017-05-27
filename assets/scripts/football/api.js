'use strict'
const config = require('../config')

// ************* QB Get request API *******************
const indexQbs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/qbs',
    method: 'GET'
  })
}

module.exports = {
  indexQbs
}
