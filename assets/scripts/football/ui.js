'use strict'
// const store = require('../store')
const showQbsTemplate = require('../templates/qbs.handlebars')
const showRbsTemplate = require('../templates/rbs.handlebars')
const showWrsTemplate = require('../templates/wrs.handlebars')

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
// ************** RB onSuccess/failure ****************
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

module.exports = {
  getQbsSuccess,
  getQbsFailure,
  getRbsSuccess,
  getRbsFailure,
  getWrsSuccess,
  getWrsFailure
}
