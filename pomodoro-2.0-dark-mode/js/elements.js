// control button

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const increaseButton = document.querySelector('.increase')
const decreaseButton = document.querySelector('.decrease')

// timer

let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')

// sounds button

const forestSoundsButton = document.querySelector('.forestSoundsButton')
const rainSoundsButton = document.querySelector('.rainSoundsButton')
const fireplaceSoundsButton = document.querySelector('.fireplaceSoundsButton')
const coffeShopSoundsButton = document.querySelector('.coffeShopSoundsButton')

// alternator

const sunButton = document.querySelector('.sun')
const moonButton = document.querySelector('.moon')
const html = document.querySelector('html')

export {
  playButton,
  pauseButton,
  stopButton,
  increaseButton,
  decreaseButton,
  displayMinutes,
  displaySeconds,
  forestSoundsButton,
  rainSoundsButton,
  fireplaceSoundsButton,
  coffeShopSoundsButton,
  sunButton,
  moonButton,
  html
}