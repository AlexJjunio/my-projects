const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

buttonPlay.addEventListener('click', function() {
  timerTimeOut()
})

function timerTimeOut() {
  setTimeout(function countDown() {
    let seconds = Number(secondsDisplay.textContent)
    
    if(seconds <= 0) {
      seconds = 60
      seconds--
      console.log(seconds)
    }
    countDown()
  }, 1000)
}
