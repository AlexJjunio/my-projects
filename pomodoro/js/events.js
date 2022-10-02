import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  soundOff,
  soundOn
} from "./elements.js"

export default function({timer, controls, sound}) {

    buttonPlay.addEventListener('click', function () {
      controls.play()
      timer.countDown()
      sound.pressButton()
    })

    buttonPause.addEventListener('click', function () {
      controls.pause()
      timer.hold()
      sound.pressButton()
    })
  
    buttonStop.addEventListener('click', function () {
      controls.reset()
      timer.reset()
      sound.pressButton()
    })

    buttonSet.addEventListener('click', function () {
      let newMinutes = controls.getMinutes()
    
      if (!newMinutes){
        timer.reset()
        return
      }
      
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    })
  
    soundOn.addEventListener('click', function () {
      soundOn.classList.add('hide')
      soundOff.classList.remove('hide')
      sound.bgAudio.play()
    })
  

    soundOff.addEventListener('click', function () {
      soundOff.classList.add('hide')
      soundOn.classList.remove('hide')
      sound.bgAudio.pause()
    })

}

