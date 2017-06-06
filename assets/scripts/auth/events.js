'use strict'
const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.signUp(data)
    .then(userUi.signUpSuccess)
    .catch(userUi.signUpFailure)
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.signIn(data)
    .then(userUi.signInSuccess)
    .catch(userUi.signInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.signOutSuccess)
    .catch(userUi.signOutFailure)
}

const onChgPswd = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.chgPswd(data)
    .then(userUi.chgPswdSuccess)
    .catch(userUi.chgPswdFailure)
}

const linkSignUp = function () {
  $('#sign-in').trigger('reset')
  $('.sign-in').hide()
  $('.sign-up').show()
}

const linkSignIn = function () {
  $('#sign-up').trigger('reset')
  $('.sign-up').hide()
  $('.sign-in').show()
}

const linkChangePassword = function () {
  $('.sign-out').hide()
  $('.change-password').show()
}

const linkAccount = function () {
  $('.change-password').hide()
  $('.sign-out').show()
}

const addHandlers = () => {
  $('.landing-hidden').hide()
  // $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChgPswd)
  $('.sign-up').hide()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.linkChangePassword').on('click', linkChangePassword)
  $('.linkAccount').on('click', linkAccount)
  $('.linkSignUp').on('click', linkSignUp)
  $('.linkSignIn').on('click', linkSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChgPswd)
  $('.dropdown-menu').click(function (event) {
    event.stopPropagation()
  })
}

module.exports = {
  addHandlers
}
