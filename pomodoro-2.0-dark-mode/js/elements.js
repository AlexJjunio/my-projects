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

let forestSoundsButton = document.querySelector('.forestSoundsButton')
let rainSoundsButton = document.querySelector('.rainSoundsButton')
let fireplaceSoundsButton = document.querySelector('.fireplaceSoundsButton')
let coffeShopSoundsButton = document.querySelector('.coffeShopSoundsButton')

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
  coffeShopSoundsButton
}