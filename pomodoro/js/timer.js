
export default function Timer({
  displayMinutes,
  displaySeconds,
  resetControls,
}) {

  let timerTimeOut
  let minutes = Number(displayMinutes.textContent)

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function updateDisplay(minutes, seconds){
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
  }
  
  function countDown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)
  
      updateDisplay(minutes, 0)
  
      if(minutes <= 0) {
        resetControls()
        return
      }
  
      if(seconds <= 0) {
        seconds = 2
        --minutes
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
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }

}