export default function Sound() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function buttonPress() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function toggle(button, audio) {
        if (button.classList == 'playing') {
            audio.play()
        } else {
            audio.pause()
        }
    }

    return {
        buttonPress,
        timeEnd,
        toggle
    }
}