const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

buttonPlay.addEventListener('click', function() {
  countDown()
})

function countDown() {
  setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if(seconds <= 0) {
      seconds = 10
      minutes--
    } else {
      seconds--
    }
    
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    
    if(seconds == 0 && minutes == 0) {
      return
    }

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    countDown()
  }, 1000)
  
}