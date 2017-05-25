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
  console.log('great success!')
}

const signInFailure = () => {
  console.log('great failure!')
}

const signOutSuccess = (data) => {
  store.user = {}
  console.log('great success!')
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
