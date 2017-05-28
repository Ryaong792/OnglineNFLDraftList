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
// ************** WR READ/DISDPLAY ****************
const getWrs = function (event) {
  const player = $(this).attr('id')
  footApi.indexWrs(player)
  .then(footUi.getWrsSuccess)
  .catch(footUi.getWrsFailure)
}
// ************** TE READ/DISDPLAY ****************
const getTes = function (event) {
  const player = $(this).attr('id')
  footApi.indexTes(player)
  .then(footUi.getTesSuccess)
  .catch(footUi.getTesFailure)
}
// ************** K(kickers) READ/DISDPLAY ****************
const getKs = function (event) {
  const player = $(this).attr('id')
  footApi.indexKs(player)
  .then(footUi.getKsSuccess)
  .catch(footUi.getKsFailure)
}
// ************** DST(Defense Team) READ/DISDPLAY ****************
const getDsts = function (event) {
  const player = $(this).attr('id')
  footApi.indexDsts(player)
  .then(footUi.getDstsSuccess)
  .catch(footUi.getDstsFailure)
}

const addHandlers = () => {
  $('.QBS').on('click', getQbs)
  $('.RBS').on('click', getRbs)
  $('.WRS').on('click', getWrs)
  $('.TES').on('click', getTes)
  $('.KS').on('click', getKs)
  $('.DST').on('click', getDsts)
}

module.exports = {
  getQbs,
  getRbs,
  getWrs,
  getKs,
  addHandlers
}
