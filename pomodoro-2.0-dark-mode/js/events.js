import {
  pauseButton, 
  playButton,
  stopButton,
  decreaseButton,
  increaseButton,
  forestSoundsButton,
  rainSoundsButton,
  fireplaceSoundsButton,
  coffeShopSoundsButton,
  sunButton,
  moonButton,
  html

} from "./elements.js";

import {
  rainSounds,
  forestSounds,
  firePlaceSounds,
  coffeShopSounds
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

  sunButton.addEventListener('click', function() {
    controls.light()
    html.classList.remove("dark-mode")
    isLight = true

    buttons.forEach(function(button) {
      if (button.style.backgroundColor === "salmon") {
        button.style.backgroundColor = "lightblue";
      }
    })

  })

  moonButton.addEventListener('click', function() {
    controls.night()
    html.classList.add("dark-mode")
    isLight = false

    buttons.forEach(function(button) {
      if (button.style.backgroundColor === "lightblue") {
        button.style.backgroundColor = "salmon";
      }
    })

  })
  
let isLight = true;
let youClicked = true;
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
                buttons[i].style.backgroundColor = "";
            } else {
                if (isPlaying) {
                    currentSounds.pause();
                }
                currentSounds = sounds[i]
                currentSounds.play()
                isPlaying = true;
                
                buttons.forEach(function(button) {
                  button.style.backgroundColor = "";                  
                })

                if(isLight) {
                  buttons[i].style.backgroundColor = "lightblue";
                } else {
                  buttons[i].style.backgroundColor = "salmon";
                }

            }
        }
    }(i))
}

}