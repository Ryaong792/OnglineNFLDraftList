'use strict'
const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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
  const cartEvents = require('../carts/events')
  const id = store.cart._id
  cartEvents.deleteCart(id)
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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChgPswd)
}

module.exports = {
  addHandlers
}
