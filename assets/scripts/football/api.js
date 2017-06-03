'use strict'
const config = require('../config')
const store = require('../store')

// ************* QB Get request API *******************
const indexQbs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/qbs',
    method: 'GET'
  })
}
// ************* RB Get request API *******************
const indexRbs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/rbs',
    method: 'GET'
  })
}
// ************* WR Get request API *******************
const indexWrs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/wrs',
    method: 'GET'
  })
}
// ************* TE Get request API *******************
const indexTes = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/tes',
    method: 'GET'
  })
}
// ************* K(kickers) Get request API *******************
const indexKs = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/ks',
    method: 'GET'
  })
}
// ************* Dst(def team) Get request API *******************
const indexDsts = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/dsts',
    method: 'GET'
  })
}
// ***************** Draft List ***************************
// ***************** Draft create *************************
const create = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/drafts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// ***************** Draft GET *************************
const indexDrafts = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/drafts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// ***************** Draft Delete *************************
const destoryDraft = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/drafts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// ***************** Draft Delete *************************
const updateNotes = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/drafts/',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  indexQbs,
  indexRbs,
  indexWrs,
  indexTes,
  indexKs,
  indexDsts,
  indexDrafts,
  create,
  destoryDraft,
  updateNotes
}
