import Controls from "./controls.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import Timer from "./timer.js";
import {
  pauseButton,
  playButton,
  stopButton,
  increaseButton,
  decreaseButton,
  displayMinutes,
  displaySeconds,

} from "./elements.js";

const controls = Controls({
  playButton,
  pauseButton,
  stopButton,
  increaseButton,
  decreaseButton,

})

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset
})

const sound = Sound()

Events({sound, timer, controls})