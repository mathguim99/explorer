import { elements } from "./elements.js"
import Timer from "./timer.js"
import Audio from "./sound.js"
import Events from "./events.js"

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
} = elements

const audio = Audio()

const timer = Timer({
    audio,
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
})


Events({
    audio,
    timer,
    minutes,
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
    fireplaceAudio
})