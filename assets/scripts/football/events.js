'use strict'
const config = require('../config')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
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
// ************** Draft List *************************************
// ************** Draft Creation *********************************
const createDraft = function () {
  event.preventDefault()
  const data = getFormFields(this)
  footApi.create(data)
      .then(footUi.onCreateDraftSuccess)
      .catch(footUi.onCreateDraftFailure)
}
// ************* DRAFT GET ***************************************
const getDraft = function (event) {
  footApi.indexDrafts()
  .then(footUi.onGetDraftsSuccess)
  .catch(footUi.onGetDraftsFailure)
}
// ************* Draft Delete ************************************
const deleteDraft = function () {
  const id = $(this).attr('data-id')
  console.log($(this).attr('data-id'))
  footApi.destoryDraft(id)
  .then(footUi.onDeleteCartSuccess)
  .catch(footUi.onDeleteCartFailure)
}
// ************* Draft Update ************************************
const addToNotes = function (data) {
  event.preventDefault()
  const notesId = $(this).data('id')
  console.log(notesId)
  footApi.updateNotes(data)
  // .then(footUi.onAddToDraftSuccess)
  // .catch(footUi.onAddToDraftFailure)
}

const addHandlers = () => {
  $('.QBS').on('click', getQbs)
  $('.RBS').on('click', getRbs)
  $('.WRS').on('click', getWrs)
  $('.TES').on('click', getTes)
  $('.KS').on('click', getKs)
  $('.DSTS').on('click', getDsts)
  //add players/team to draft
  $('.QB').on('click', '#createDraft', createDraft)
  $('.RB').on('click', '#createDraft', createDraft)
  $('.WR').on('click', '#createDraft', createDraft)
  $('.TE').on('click', '#createDraft', createDraft)
  $('.K').on('click', '#createDraft', createDraft)
  $('.DST').on('click','#createDraft', createDraft)
// update notes
  $('.DRAFT').on('submit', '#updateNotes', addToNotes)




  $('.DRAFTS').on('click', getDraft)
  $('.deleteDraft').on('click', deleteDraft)
  $('.DRAFT').on('click', '.deleteDraft', deleteDraft)
}

module.exports = {
  getQbs,
  getRbs,
  getWrs,
  getKs,
  createDraft,
  getDraft,
  deleteDraft,
  addHandlers,
  addToNotes
}
