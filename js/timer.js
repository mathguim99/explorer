export default function Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    audio
}) 
{
    let minutes = Number(minutesDisplay.textContent)
    const startMinutes = minutes
    let seconds = Number(secondsDisplay.textContent)
    let timerTimeout

    function updateDisplay (minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function resetControls () {
        buttonPlay.classList.remove('hidden')
        buttonPause.classList.add('hidden')
    }

    function resetTimer () {
        clearTimeout(timerTimeout)
        minutes = startMinutes
        seconds = 0
        updateDisplay(minutes, seconds)
    }

    function countdown () {
        timerTimeout = setTimeout(function() {
            if (minutes <= 0 && seconds <= 0) {
                resetControls()
                resetTimer()
                audio.timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                minutes--
            }
            
            seconds--
            updateDisplay(minutes, seconds)

            countdown()
        }, 1000)
    }

    function addTime (){
        minutes = minutes + 5
        updateDisplay(minutes, seconds)
    }
    
    function removeTime (){
        minutes = minutes - 5
        if (minutes <= 0) {
            minutes = 0
        }
        updateDisplay(minutes, seconds)
    }

    function hold(){
        clearTimeout(timerTimeout)
    }

    return {
        resetControls,
        resetTimer,
        countdown,
        addTime,
        removeTime,
        hold
    }
}


