'use strict'
// const store = require('../store')
const showQbsTemplate = require('../templates/qbs.handlebars')
const showRbsTemplate = require('../templates/rbs.handlebars')
const showWrsTemplate = require('../templates/wrs.handlebars')
const showTesTemplate = require('../templates/tes.handlebars')
const showKsTemplate = require('../templates/ks.handlebars')
const showDstsTemplate = require('../templates/dsts.handlebars')

// ************** QB onSuccess/failure ****************
const getQbsSuccess = (data) => {
  console.log(data)
  const showQbsHTML = showQbsTemplate({
    qbs: data.qbs
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
    rbs: data.rbs
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
    wrs: data.wrs
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
    tes: data.tes
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
    ks: data.ks
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
    dsts: data.dsts
  })
  $('.DST').append(showDstsHTML)
}

const getDstsFailure = (error) => {
  console.log(error)
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
  getDstsFailure
}
