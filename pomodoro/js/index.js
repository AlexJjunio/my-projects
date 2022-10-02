import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
  displayMinutes,
  displaySeconds,
} from "./elements.js"



const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset,
})

const sound = Sound()

Events({sound, timer, controls})
