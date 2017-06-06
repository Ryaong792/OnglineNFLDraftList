'use strict'
const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'




const backToRanking = function () {
  $('#section-handlebars').hide()
  $('#section-ranking').show()
  $('.draftList').show()
  $('#section-ranking').addClass('animated slideInLeft').one(animationEnd, function () {
    $(this).removeClass('animated ' + 'slideInLeft')
  })
  $('.qbrank').hide()
  $('.rbrank').hide()
  $('.wrrank').hide()
  $('.terank').hide()
  $('.krank').hide()
  $('.dstrank').hide()
  $('.draftListing').hide()
}

const addHandlers = () => {
  $('.carousel').carousel()
  $('#section-ranking').hide()
  $('#section-handlebars').hide()
  $('#rankingnav').hide()
  $('.qbrank').hide()
  $('.rbrank').hide()
  $('.wrrank').hide()
  $('.terank').hide()
  $('.krank').hide()
  $('.dstrank').hide()
  $('.draftListing').hide()
  $('.backToRanking').on('click', backToRanking)
}

module.exports = {
  addHandlers

}
