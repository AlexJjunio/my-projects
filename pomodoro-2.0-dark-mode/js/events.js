import {
  pauseButton, 
  playButton 
} from "./elements.js";

export default function({
  sound,
  controls
}) {

  playButton.addEventListener('click', function() {
    sound.pressButton()
    controls.play()
  })

  pauseButton.addEventListener('click', function() {
    sound.pressButton()
    controls.pause()
  })

}