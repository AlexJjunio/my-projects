import Controls from "./controls.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  pauseButton,
  playButton
} from "./elements.js";

const controls = Controls({
  playButton,
  pauseButton,
})

const sound = Sound()

Events({sound, controls})