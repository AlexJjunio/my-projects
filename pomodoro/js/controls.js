export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes){
      return false
    }
  
    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}