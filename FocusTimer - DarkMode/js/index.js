import { elements } from "./elements.js"
import Timer from "./timer.js"
import Audio from "./sound.js"
import Events from "./events.js"
import Mode from "./mode.js"

const {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonForest,
    buttonRain,
    buttonCafe,
    buttonFireplace,
    forestAudio,
    rainAudio,
    cafeAudio,
    fireplaceAudio,
    buttonLightMode,
    buttonDarkMode,
    forestVolume,
    rainVolume,
    cafeVolume,
    fireplaceVolume
} = elements

const audio = Audio()

const timer = Timer({
    audio,
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
})

const colorMode = Mode()

Events({
    audio,
    timer,
    colorMode,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonForest,
    buttonRain,
    buttonCafe,
    buttonFireplace,
    forestAudio,
    rainAudio,
    cafeAudio,
    fireplaceAudio,
    buttonLightMode,
    buttonDarkMode,
    forestVolume,
    rainVolume,
    cafeVolume,
    fireplaceVolume,
})