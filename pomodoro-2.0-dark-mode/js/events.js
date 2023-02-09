import {
  pauseButton, 
  playButton,
  stopButton,
  decreaseButton,
  increaseButton,
  displayMinutes,
  forestSoundsButton,
  rainSoundsButton,
  fireplaceSoundsButton,
  coffeShopSoundsButton
} from "./elements.js";


export default function({timer,sound,controls}) {

  playButton.addEventListener('click', function() {
    timer.countDown()
    controls.play()
    sound.pressButton()
  })

  pauseButton.addEventListener('click', function() {
    sound.pressButton()
    controls.pause()
    timer.hold()
  })

  stopButton.addEventListener('click', function() {
    sound.pressButton()
    timer.reset()
    controls.reset()
  })

  decreaseButton.addEventListener('click', function() {
    sound.pressButton()
    timer.decreaseMinutes()
  })

  increaseButton.addEventListener('click', function() {
    sound.pressButton()
    timer.increaseMinutes()
  })

  forestSoundsButton.addEventListener('click')

}