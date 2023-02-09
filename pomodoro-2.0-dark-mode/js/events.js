import {
  pauseButton, 
  playButton,
  stopButton,
  decreaseButton,
  increaseButton,
  rainSoundsButton,
  forestSoundsButton,
  coffeShopSoundsButton,
  fireplaceSoundsButton
} from "./elements.js";

import {
  rainSounds,
  forestSounds,
  coffeShopSounds,
  firePlaceSounds
} from "./sounds.js";

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

let isPlaying = false;
var currentSounds = null;
var sounds = [rainSounds,forestSounds,coffeShopSounds,firePlaceSounds];
var buttons = [rainSoundsButton, forestSoundsButton, coffeShopSoundsButton, fireplaceSoundsButton];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(i) {
        return function() {
            if (isPlaying && currentSounds === sounds[i]) {
                currentSounds.pause();
                isPlaying = false;
                // buttons[i].style.background = "";
            } else {
                if (isPlaying) {
                    currentSounds.pause();
                }
                currentSounds = sounds[i]
                currentSounds.play()
                isPlaying = true;
                // buttons[i].style.background = "#02799D";
            }
        }
    }(i))
}

}