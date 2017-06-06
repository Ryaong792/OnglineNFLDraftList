'use strict'
require('../index')
const store = require('../store')

const signUpSuccess = () => {
  $('#sign-up').trigger('reset')
  $('#signUpSuccess').modal('show')
  $('.dropdown-menu').trigger('click')
  $('.sign-up').hide()
  $('.sign-in').show()
}
const signUpFailure = () => {
  $('#sign-up').trigger('reset')
  $('#signUpFailure').modal('show')
  $('.dropdown-menu').trigger('click')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.sign-in').hide()
  $('.intro-message2').hide()
  $('.sign-out').show()
  $('#rankingnav').show()
  $('#section-ranking').show()
  // $('#section-ranking').removeClass('animated slideOutRight')
  // $('#section-ranking').show().addClass('animated flipInX')

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
  $('.intro-message2').show()
  $('.sign-in').show()
  $('.sign-out').hide()
  $('#rankingnav').hide()
  $('#signOut').modal('show')
  $('#section-ranking').hide()
  $('#section-handlebars').hide()
}

const signOutFailure = () => {
}

const chgPswdSuccess = () => {
  $('#change-password').trigger('reset')
  $('#chgPswdSuccess').modal('show')
  $('.sign-out').show()
  $('.change-password').hide()
}

const chgPswdFailure = () => {
  $('.dropdown-menu').trigger('click')
  $('#chgPswdFailure').modal('show')
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
