'use strict'
const store = require('../store')
const showQbsTemplate = require('../templates/qbs.handlebars')
const showRbsTemplate = require('../templates/rbs.handlebars')
const showWrsTemplate = require('../templates/wrs.handlebars')
const showTesTemplate = require('../templates/tes.handlebars')
const showKsTemplate = require('../templates/ks.handlebars')
const showDstsTemplate = require('../templates/dsts.handlebars')
const showDraftsTemplate = require('../templates/drafts.handlebars')
const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

// ************** QB onSuccess/failure ****************
const getQbsSuccess = (data) => {
  const showQbsHTML = showQbsTemplate({
    qbs: data.qbs,
    user: store.user.email
  })
  $('.QB').html(showQbsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('#handlebars').show()
  $('#rankingnav').hide()
  $('.qbrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
  $('#tableqb').DataTable()
}

const getQbsFailure = () => {
}
// ************** RB onSuccess/failure ****************
const getRbsSuccess = (data) => {
  const showRbsHTML = showRbsTemplate({
    rbs: data.rbs,
    user: store.user.email
  })
  $('.RB').html(showRbsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('#rankingnav').hide()
  $('#handlebars').show()
  $('.rbrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
  $('#tablerb').DataTable()
}

const getRbsFailure = () => {
}
// ************** WR onSuccess/failure ****************
const getWrsSuccess = (data) => {
  const showWrsHTML = showWrsTemplate({
    wrs: data.wrs,
    user: store.user.email
  })
  $('.WR').html(showWrsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('#rankingnav').hide()
  $('#handlebars').show()
  $('.wrrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
  $('#tablewr').DataTable()
}

const getWrsFailure = () => {
}
// ************** TE onSuccess/failure ****************
const getTesSuccess = (data) => {
  const showTesHTML = showTesTemplate({
    tes: data.tes,
    user: store.user.email
  })
  $('.TE').html(showTesHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('#rankingnav').hide()
  $('#handlebars').show()
  $('.terank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
  $('#tablete').DataTable()
}

const getTesFailure = () => {
}
// ************** K(kickers) onSuccess/failure ****************
const getKsSuccess = (data) => {
  const showKsHTML = showKsTemplate({
    ks: data.ks,
    user: store.user.email
  })
  $('.K').html(showKsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('#rankingnav').hide()
  $('#handlebars').show()
  $('.krank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
    $('#tablek').DataTable()
  })
}

const getKsFailure = () => {
}
// ************** DST(Def team) onSuccess/failure ****************
const getDstsSuccess = (data) => {
  const showDstsHTML = showDstsTemplate({
    dsts: data.dsts,
    user: store.user.email
  })
  $('.DST').html(showDstsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('#rankingnav').hide()
  $('#handlebars').show()
  $('.dstrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
  $('#tabledst').DataTable()
}

const getDstsFailure = () => {
}
// ************ DRAFT LIST *******************************
// ************** Draft create onSuccess/failure ****************
const onCreateDraftSuccess = (data) => {
  store.draft = data.draft
  $('#addPlayer').modal('show')
}

const onCreateDraftFailure = (data) => {
  $('#noPlayer').modal('show')
}
// ************** Draft GET onSuccess/failure ****************
const onGetDraftsSuccess = (data) => {
  const showDraftsHTML = showDraftsTemplate({
    drafts: data.drafts
  })
  $('.DRAFT').html(showDraftsHTML)
  $('#section-ranking').hide()
  $('.draftList').hide()
  $('#section-handlebars').show()
  $('#rankingnav').hide()
  $('#handlebars').show()
  $('.draftListing').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
  $('.qbrank').hide()
  $('.rbrank').hide()
  $('.wrrank').hide()
  $('.terank').hide()
  $('.krank').hide()
  $('.dstrank').hide()
  $('#tabledf').DataTable()
}

const onGetDraftsFailure = (data) => {
}
const onGetDraftsSuccess1 = (data) => {
  const showDraftsHTML = showDraftsTemplate({
    drafts: data.drafts
  })
  $('.DRAFT').html(showDraftsHTML)
  $('#tabledf').DataTable()
}

const onGetDraftsFailure1 = (data) => {
}
// ************** Draft Delete onSuccess/failure ****************
const onDeleteDraftSuccess = (data) => {
  $('#removePlayer').modal('show')
  $('#tabledf').DataTable()
}

const onDeleteDraftFailure = (data) => {
}
// ************** Draft patch onSuccess/failure ****************

const onAddToNotesSuccess = () => {
  $('#update').modal('show')
}
const onAddToNotesFailure = () => {
}
// ************** hide on success *********************

module.exports = {
  getQbsSuccess,
  getQbsFailure,
  getRbsSuccess,
  getRbsFailure,
  getWrsSuccess,
  getWrsFailure,
  getTesSuccess,
  getTesFailure,
  getKsSuccess,
  getKsFailure,
  getDstsSuccess,
  getDstsFailure,
  onCreateDraftSuccess,
  onCreateDraftFailure,
  onGetDraftsSuccess,
  onGetDraftsFailure,
  onGetDraftsSuccess1,
  onGetDraftsFailure1,
  onDeleteDraftSuccess,
  onDeleteDraftFailure,
  onAddToNotesSuccess,
  onAddToNotesFailure
}
