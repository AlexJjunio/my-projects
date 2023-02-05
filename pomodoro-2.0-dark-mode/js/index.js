const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
const initialSeconds = secondsDisplay.textContent;
const initialMinutes = minutesDisplay.textContent;
let timerTimeOut;
let newMinutes;
let forestSoundsButton = document.querySelector('.forestSoundsButton')
let rainSoundsButton = document.querySelector('.rainSoundsButton')
let fireplaceSoundsButton = document.querySelector('.fireplaceSoundsButton')
let coffeShopSoundsButton = document.querySelector('.coffeShopSoundsButton')
let sunButton = document.querySelector('.sun')
let moonButton = document.querySelector('.moon')


//dark mode
const html = document.querySelector("html")
moonButton.addEventListener('click', function() {
  moonButton.classList.add('hide')
  sunButton.classList.remove('hide')
  html.classList.add("dark-mode")
})

sunButton.addEventListener('click', function() {
  moonButton.classList.remove('hide')
  sunButton.classList.add('hide')
  html.classList.remove("dark-mode")
})

//--------------------

//adding app sounds 
const rainSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/rain.wav?raw=true")
const forestSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/florest.wav?raw=true")
const coffeShopSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/coffeshop.wav?raw=true")
const fireplaceSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/fireplace.wav?raw=true")

let isPlaying = false;

fireplaceSoundsButton.addEventListener('click', function() {
  if (isPlaying) {
    fireplaceSounds.pause();
    isPlaying = false;
  } else {
    fireplaceSounds.play();
    isPlaying = true;
  }
});

coffeShopSoundsButton.addEventListener('click', function() {
  if (isPlaying) {
    fireplaceSounds.pause();
    isPlaying = false;
  } else {
    fireplaceSounds.play();
    isPlaying = true;
  }
})

rainSoundsButton.addEventListener('click', function() {
  if (isPlaying) {
    fireplaceSounds.pause();
    isPlaying = false;
  } else {
    fireplaceSounds.play();
    isPlaying = true;
  }
})

forestSoundsButton.addEventListener('click', function() {
  if (isPlaying) {
    fireplaceSounds.pause();
    isPlaying = false;
  } else {
    fireplaceSounds.play();
    isPlaying = true;
  }
})

// -------------------------------------------

function resetTimer() {
  minutesDisplay.textContent = initialMinutes
  secondsDisplay.textContent = initialSeconds
}



buttonIncrease.addEventListener('mousedown', function(){
  newMinutes = Number(minutesDisplay.textContent) + 1
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = initialSeconds
  clearTimeout(timerTimeOut)

  if(minutesDisplay.textContent >= 60){
    minutesDisplay.textContent = 60
    return
  }
})

buttonDecrease.addEventListener('click', function(){
  resetControls()

  if(secondsDisplay.textContent == 0){
    newMinutes = Number(minutesDisplay.textContent) - 1
    minutesDisplay.textContent = String(newMinutes).padStart("2", 0)
  } else {
    secondsDisplay.textContent = initialSeconds
    clearTimeout(timerTimeOut)
  }

  if(minutesDisplay.textContent <= 0) {
    minutesDisplay.textContent = String(0).padStart("2", 0)
    return
  }
})

buttonPlay.addEventListener('click', function() {

  if(minutesDisplay.textContent && secondsDisplay.textContent == 0) {
    clearTimeout(timerTimeOut)
    resetTimer()
  }
    countDown()
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')


})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)

})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  resetTimer()
})


function countDown() {
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    
    if(seconds <= 0) {
      seconds = 59
      --minutes
    } else {
      --seconds
    }
    
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    countDown()
  }, 1000)
  
}

