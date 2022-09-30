import resetControls from "./controls.js"
import { Timer } from "./timer.js"

const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let minutes = Number(displayMinutes.textContent)
let timerTimeOut;

const timer = Timer({
  displayMinutes,
  displaySeconds,
  timerTimeOut,
  resetControls,
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countDown()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes){
    timer.resetTimer()
    // clearTimeout(timerTimeOut)
    return
  }

  minutes = newMinutes

  timer.updateTimerDisplay(newMinutes, 0)
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  timer.resetTimer()
})

soundOn.addEventListener('click', function () {
  soundOn.classList.add('hide')
  soundOff.classList.remove('hide')
})

soundOff.addEventListener('click', function () {
  soundOff.classList.add('hide')
  soundOn.classList.remove('hide')
})