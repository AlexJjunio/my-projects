import Sounds from "./sounds.js";


export default function Timer({
  displayMinutes,
  displaySeconds,
  resetControls
}) {

  let timerTimeOut  
  let minutes = Number(displayMinutes.textContent)

  function increaseMinutes() {
    let newMinutes = Number(displayMinutes.textContent) + 1
    updateMinutes(newMinutes)
    updateDisplay(minutes, 0)
  }

  function decreaseMinutes() {

    if(displaySeconds.textContent == 0) {
      let newMinutes = Number(displayMinutes.textContent) - 1
      updateMinutes(newMinutes)
      updateDisplay(minutes, 0)
    } else {
      displaySeconds.textContent = "00"
    }

  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    displayMinutes.textContent = String(newMinutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
  }


  function countDown() {
    timerTimeOut = setTimeout(function() {
      let minutes = Number(displayMinutes.textContent)
      let seconds = Number(displaySeconds.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      

      if(isFinished) {
        // resetControls()
        updateDisplay()
        Sounds().timeEnd()
        resetControls()
        return
      }

      if(seconds <= 0) {
        seconds = 60
        minutes--
      } 

      updateDisplay(minutes, String(seconds - 1))

      countDown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    hold,
    reset,
    updateDisplay,
    updateMinutes,
    increaseMinutes,
    decreaseMinutes,
    resetControls
  }
}