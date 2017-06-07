'use strict'

const image = document.getElementById('circle')
let currentPos = 0
const images = ['https://s3.amazonaws.com/ryaong792/Ryan1.jpg', 'https://s3.amazonaws.com/ryaong792/Ryan2.jpg', 'https://s3.amazonaws.com/ryaong792/Ryan3.jpg']

function volgendefoto () {
  if (++currentPos >= images.length) currentPos = 0
  image.src = images[currentPos]
}

setInterval(volgendefoto, 1000)
