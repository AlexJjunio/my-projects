const rainSounds = new Audio("https://github.com/AlexJjunio/my-projects/blob/main/pomodoro-2.0-dark-mode/sounds/rain.wav?raw=true")

const forestSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/florest.wav?raw=true")

const coffeShopSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/coffeshop.wav?raw=true")

const firePlaceSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/fireplace.wav?raw=true")

export default function() {

  const buttonPressAudio = new Audio("https://github.com/AlexJjunio/my-projects/blob/main/pomodoro-2.0-dark-mode/sounds/audios_button-press.wav?raw=true")
  
  const kitchenTimer = new Audio("https://github.com/AlexJjunio/my-projects/blob/main/pomodoro-2.0-dark-mode/sounds/audios_kichen-timer%20(3).mp3?raw=true")

  function timeEnd() {
    kitchenTimer.play()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  return {
    pressButton,
    timeEnd,
  }
  
}

export {
  rainSounds,
  forestSounds,
  firePlaceSounds,
  coffeShopSounds
}