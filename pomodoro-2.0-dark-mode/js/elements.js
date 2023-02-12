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
const firePlaceSoundsButton = document.querySelector('.firePlaceSoundsButton')
const coffeShopSoundsButton = document.querySelector('.coffeShopSoundsButton')

// alternator

const sunButton = document.querySelector('.sun')
const moonButton = document.querySelector('.moon')
const html = document.querySelector('html')

// sliders

const firstSlider = document.querySelector('#first-slider')
const secondSlider = document.querySelector('#second-slider')
const thirdSlider = document.querySelector('#third-slider')
const fourthSlider = document.querySelector('#fourth-slider')


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
  firePlaceSoundsButton,
  coffeShopSoundsButton,
  sunButton,
  moonButton,
  html,
  firstSlider,
  secondSlider,
  thirdSlider,
  fourthSlider
}