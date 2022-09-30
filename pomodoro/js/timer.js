
export function Timer({
  displayMinutes,
  displaySeconds,
  timerTimeOut,
  resetControls
}) {

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function updateTimerDisplay(minutes, seconds){
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
  }
  
  function countDown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)
  
      updateTimerDisplay(minutes, 0)
  
      if(minutes <= 0) {
        resetControls()
        return
      }
  
      if(seconds <= 0) {
        seconds = 20
        --minutes
      }
      
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countDown()
    }, 1000)
  }
  
  return {
    countDown,
    resetTimer,
    updateTimerDisplay,
  }

}