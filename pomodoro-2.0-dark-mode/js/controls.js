export default function Controls({
  playButton,
  pauseButton,
  stopButton,
  increaseButton,
  decreaseButton
}) {

  function play() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
  }

  function pause() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  }

  function reset() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  }

  return {
    play,
    pause,
    reset
  }
}