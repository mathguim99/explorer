export default function Events({
    audio,
    timer,
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
    })
    
    buttonRain.addEventListener('click', function() {
        buttonRain.classList.toggle('playing')
        audio.toggle(buttonRain, rainAudio)
        audio.buttonPress()
    })
    
    buttonCafe.addEventListener('click', function() {
        buttonCafe.classList.toggle('playing')
        audio.toggle(buttonCafe, cafeAudio)
        audio.buttonPress()
    })
    
    buttonFireplace.addEventListener('click', function() {
        buttonFireplace.classList.toggle('playing')
        audio.toggle(buttonFireplace, fireplaceAudio)
        audio.buttonPress()
    })    
}