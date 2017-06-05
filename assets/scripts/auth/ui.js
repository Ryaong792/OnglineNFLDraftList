'use strict'
require('../index')
const store = require('../store')

const signUpSuccess = () => {
  console.log('great success!')
}
const signUpFailure = () => {
  console.log('great failure!')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.sign-in').hide()
  $('.sign-out').show()
  $('.dropdown-menu').trigger('click')
  $('#welcome').modal('show')
}

const signInFailure = () => {
  $('#sign-in').trigger('reset')
  $('#signInFailure').modal('show')
  $('.dropdown-menu').trigger('click')
}

const signOutSuccess = (data) => {
  store.user = {}
  $('.sign-in').show()
  $('.sign-out').hide()
  $('#signOut').modal('show')
}

const signOutFailure = () => {
  console.log('great failure!')
}

const chgPswdSuccess = () => {
  console.log('great success!')
}

const chgPswdFailure = () => {
  console.log('great failure!')
//  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  chgPswdSuccess,
  chgPswdFailure
}
