'use strict'

const footApi = require('./api.js')
const footUi = require('./ui.js')

// ************** QB READ/DISDPLAY ****************
const getQbs = function (event) {
  const player = $(this).attr('id')
  footApi.indexQbs(player)
  .then(footUi.getQbsSuccess)
  .catch(footUi.getQbsFailure)
}

// ************** RB READ/DISDPLAY ****************
const getRbs = function (event) {
  const player = $(this).attr('id')
  footApi.indexRbs(player)
  .then(footUi.getRbsSuccess)
  .catch(footUi.getRbsFailure)
}

const addHandlers = () => {
  $('.QBS').on('click', getQbs)
  $('.RBS').on('click', getRbs)
}

module.exports = {
  getQbs,
  getRbs,
  addHandlers
}
