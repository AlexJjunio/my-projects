export default function() {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const rainSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/rain.wav?raw=true")

  const forestSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/florest.wav?raw=true")

  const coffeShopSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/coffeshop.wav?raw=true")

  const firePlaceSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/fireplace.wav?raw=true")
  

  function pressRainSoundsButton() {
    rainSounds.play()
  }
  
  function pressForestSoundsButton() {
    forestSounds.play()
  }
  function pressCoffeShopSoundsButton() {
    coffeShopSounds.play()
  }
  function pressFirePlaceSoundsButton() {
    firePlaceSounds.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  return {
    pressButton,
    timeEnd,
    rainSounds,
    forestSounds,
    coffeShopSounds,
    firePlaceSounds
  }

}