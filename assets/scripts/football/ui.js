'use strict'
const store = require('../store')
const showQbsTemplate = require('../templates/qbs.handlebars')
const showRbsTemplate = require('../templates/rbs.handlebars')
const showWrsTemplate = require('../templates/wrs.handlebars')
const showTesTemplate = require('../templates/tes.handlebars')
const showKsTemplate = require('../templates/ks.handlebars')
const showDstsTemplate = require('../templates/dsts.handlebars')
const showDraftsTemplate = require('../templates/drafts.handlebars')

// ************** QB onSuccess/failure ****************
const getQbsSuccess = (data) => {
  console.log(data)
  const showQbsHTML = showQbsTemplate({
    qbs: data.qbs,
    user: store.user.email
  })
  $('.QB').append(showQbsHTML)
}

const getQbsFailure = (error) => {
  console.log(error)
}
// ************** RB onSuccess/failure ****************
const getRbsSuccess = (data) => {
  console.log(data)
  const showRbsHTML = showRbsTemplate({
    rbs: data.rbs,
    user: store.user.email
  })
  $('.RB').append(showRbsHTML)
}

const getRbsFailure = (error) => {
  console.log(error)
}
// ************** WR onSuccess/failure ****************
const getWrsSuccess = (data) => {
  console.log(data)
  const showWrsHTML = showWrsTemplate({
    wrs: data.wrs,
    user: store.user.email
  })
  $('.WR').append(showWrsHTML)
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
  $('.TE').append(showTesHTML)
}

const getTesFailure = (error) => {
  console.log(error)
}
// ************** K(kickers) onSuccess/failure ****************
const getKsSuccess = (data) => {
  console.log(data)
  const showKsHTML = showKsTemplate({
    ks: data.ks,
    user: store.user.email
  })
  $('.K').append(showKsHTML)
}

const getKsFailure = (error) => {
  console.log(error)
}
// ************** DST(Def team) onSuccess/failure ****************
const getDstsSuccess = (data) => {
  console.log(data)
  const showDstsHTML = showDstsTemplate({
    dsts: data.dsts,
    user: store.user.email
  })
  $('.DST').append(showDstsHTML)
}

const getDstsFailure = (error) => {
  console.log(error)
}
// ************ DRAFT LIST *******************************
// ************** Draft create onSuccess/failure ****************
const onCreateDraftSuccess = (data) => {
  store.draft = data.draft
  console.log(data.draft)
}

const onCreateDraftFailure = (data) => {
  console.log()
}
// ************** Draft GET onSuccess/failure ****************
const onGetDraftsSuccess = (data) => {
  console.log(data)
  const showDraftsHTML = showDraftsTemplate({
    drafts: data.drafts
  })
  $('.DRAFT').append(showDraftsHTML)
}

const onGetDraftsFailure = (data) => {
  console.log('fuck off and login')
}
// ************** Draft Delete onSuccess/failure ****************
const onDeleteDraftSuccess = (data) => {
  console.log()
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
