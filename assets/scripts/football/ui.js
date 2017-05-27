'use strict'
const store = require('../store')
const showQbsTemplate = require('../templates/qbs.handlebars')

const getQbsSuccess = (data) => {
  console.log(data)
  // store.data = data
  // products.products = store.data
  const showQbsHTML = showQbsTemplate({
    qbs: data.qbs
  })
  $('.QB').append(showQbsHTML)
}

const getQbsFailure = (error) => {
  console.log(error)
}

module.exports = {
  getQbsSuccess,
  getQbsFailure
}
