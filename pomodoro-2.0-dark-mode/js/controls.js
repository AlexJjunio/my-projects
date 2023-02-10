// import { sunButton } from "./elements"

export default function Controls({
  playButton,
  pauseButton,
  sunButton,
  moonButton
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

  function light() {
    moonButton.classList.remove('hide')
    sunButton.classList.add('hide')
  }

  function night() {
    moonButton.classList.add('hide')
    sunButton.classList.remove('hide')
  }

  return {
    play,
    pause,
    reset,
    light,
    night
  }
}