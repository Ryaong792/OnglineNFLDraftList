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
  console.log(data)
  const showQbsHTML = showQbsTemplate({
    qbs: data.qbs,
    user: store.user.email
  })
  $('.QB').html(showQbsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('.qbrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
}

const getQbsFailure = () => {
}
// ************** RB onSuccess/failure ****************
const getRbsSuccess = (data) => {
  console.log(data)
  const showRbsHTML = showRbsTemplate({
    rbs: data.rbs,
    user: store.user.email
  })
  $('.RB').html(showRbsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('.rbrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
}

const getRbsFailure = () => {
}
// ************** WR onSuccess/failure ****************
const getWrsSuccess = (data) => {
  console.log(data)
  const showWrsHTML = showWrsTemplate({
    wrs: data.wrs,
    user: store.user.email
  })
  $('.WR').html(showWrsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('.wrrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
}

const getWrsFailure = (error) => {
  console.log(error)
}
// ************** TE onSuccess/failure ****************
const getTesSuccess = (data) => {
  console.log(data)
  const showTesHTML = showTesTemplate({
    tes: data.tes,
    user: store.user.email
  })
  $('.TE').html(showTesHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('.terank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
}

const getTesFailure = () => {
}
// ************** K(kickers) onSuccess/failure ****************
const getKsSuccess = (data) => {
  console.log(data)
  const showKsHTML = showKsTemplate({
    ks: data.ks,
    user: store.user.email
  })
  $('.K').html(showKsHTML)
  $('#section-ranking').hide()
  $('#section-handlebars').show()
  $('.krank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
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
  $('.dstrank').show()
  $('#section-handlebars').addClass('animated slideInRight').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInRight')
  })
}

const getDstsFailure = () => {
}
// ************ DRAFT LIST *******************************
// ************** Draft create onSuccess/failure ****************
const onCreateDraftSuccess = (data) => {
  store.draft = data.draft
  console.log(data.draft)
  $('#addPlayer').modal('show')
}

const onCreateDraftFailure = (data) => {
  console.log()
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
}

const onGetDraftsFailure = (data) => {
}
// ************** Draft Delete onSuccess/failure ****************
const onDeleteDraftSuccess = (data) => {
  console.log()
  $('#removePlayer').modal('show')
}

const onDeleteDraftFailure = (data) => {
  console.log('data')
}
// ************** Draft patch onSuccess/failure ****************

const onAddToDraftSuccess = () => {
  console.log('great')
}
const onAddToDraftFailure = () => {
  console.log('fuck')
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
  onDeleteDraftSuccess,
  onDeleteDraftFailure,
  onAddToDraftSuccess,
  onAddToDraftFailure
}
