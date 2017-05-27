'use strict'

const footApi = require('./api.js')
const footUi = require('./ui.js')

const getQbs = function (event) {
  const player = $(this).attr('id')
  footApi.indexQbs(player)
  .then(footUi.getQbsSuccess)
  .catch(footUi.getQbsFailure)
}

const addHandlers = () => {
  $('.QBS').on('click', getQbs)
}

module.exports = {
  getQbs,
  addHandlers
}
