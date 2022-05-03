const minutesDisplay = document.getElementById('minutes')
const secondsDisplay = document.getElementById('seconds')

const buttonPlay = document.getElementById('play')
const buttonPause = document.getElementById('pause')
const buttonStop = document.getElementById('stop')
const buttonPlus = document.getElementById('plus-time')
const buttonMinus = document.getElementById('minus-time')

const buttonForest = document.getElementById('forest')
const buttonRain = document.getElementById('rain')
const buttonCafe = document.getElementById('cafe')
const buttonFireplace = document.getElementById('fireplace')

const buttonLightMode = document.getElementById('light-mode')
const buttonDarkMode = document.getElementById('dark-mode')

const forestAudio = new Audio("../sounds/forest.wav")
const rainAudio = new Audio("../sounds/rain.wav")
const cafeAudio = new Audio("../sounds/cafe.wav")
const fireplaceAudio = new Audio("../sounds/fireplace.wav")

let forestVolume = document.getElementById('forest-volume')
let rainVolume = document.getElementById('rain-volume')
let cafeVolume = document.getElementById('cafe-volume')
let fireplaceVolume = document.getElementById('fireplace-volume')

forestAudio.loop = true
rainAudio.loop = true
cafeAudio.loop = true
fireplaceAudio.loop = true

export const elements = {
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
}