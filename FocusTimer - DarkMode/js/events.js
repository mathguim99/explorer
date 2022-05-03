export default function Events({
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
}) {
    buttonPlay.addEventListener('click', function() {
        buttonPlay.classList.add('hidden')
        buttonPause.classList.remove('hidden')
        audio.buttonPress()
    
        timer.countdown()
    })
    
    buttonPause.addEventListener('click', function() {
        buttonPause.classList.add('hidden')
        buttonPlay.classList.remove('hidden')
        audio.buttonPress()
    
        timer.hold()
    })
    
    buttonStop.addEventListener('click', function() {
        timer.resetControls()
        timer.resetTimer()
        audio.buttonPress()
    })
    
    buttonPlus.addEventListener('click', function() {
        timer.addTime()
        audio.buttonPress()
    })
    
    buttonMinus.addEventListener('click', function() {
        timer.removeTime()
        audio.buttonPress()
    })
    
    
    
    buttonForest.addEventListener('click', function() {
        buttonForest.classList.toggle('playing')
        audio.toggle(buttonForest, forestAudio)
        audio.buttonPress()
        audio.updateVolume(forestAudio, forestVolume)
    })
    
    buttonRain.addEventListener('click', function() {
        buttonRain.classList.toggle('playing')
        audio.toggle(buttonRain, rainAudio)
        audio.buttonPress()
        audio.updateVolume(rainAudio, rainVolume)
    })
    
    buttonCafe.addEventListener('click', function() {
        buttonCafe.classList.toggle('playing')
        audio.toggle(buttonCafe, cafeAudio)
        audio.buttonPress()
        audio.updateVolume(cafeAudio, cafeVolume)
    })
    
    buttonFireplace.addEventListener('click', function() {
        buttonFireplace.classList.toggle('playing')
        audio.toggle(buttonFireplace, fireplaceAudio)
        audio.buttonPress()
        audio.updateVolume(fireplaceAudio, fireplaceVolume)
    })
    


    buttonLightMode.addEventListener('click', function() {
        colorMode.darkMode(true)
        buttonDarkMode.classList.remove('hidden')
        buttonLightMode.classList.add('hidden')
    })

    buttonDarkMode.addEventListener('click', function() {
        colorMode.darkMode(false)
        buttonDarkMode.classList.add('hidden')
        buttonLightMode.classList.remove('hidden')
    })
}