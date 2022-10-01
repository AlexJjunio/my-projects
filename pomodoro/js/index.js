import Controls from "./controls.js"
import Timer from "./timer.js"


const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset,
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countDown()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()

  if (!newMinutes){
    timer.reset()
    return
  }
  
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
})

soundOn.addEventListener('click', function () {
  soundOn.classList.add('hide')
  soundOff.classList.remove('hide')
})

soundOff.addEventListener('click', function () {
  soundOff.classList.add('hide')
  soundOn.classList.remove('hide')
})

