export default function Mode() {
    function darkMode (on) {
        let root = document.querySelector(':root')

        if (on) {
            root.style.setProperty('--color-primary', 'hsl(var(--color-hue), 74%, 15%)')
            root.style.setProperty('--color-secondary', 'hsl(var(--color-hue), 6%, 17%)')
            root.style.setProperty('--color-icons', 'hsl(var(--color-hue), 7%, 78%)')
            root.style.setProperty('--color-bg', 'hsl(var(--color-hue), 5%, 0%)')
            root.style.setProperty('--color-text', 'hsl(var(--color-hue), 0%, 100%)')
        } if (!on) {
            root.style.setProperty('--color-primary', 'hsl(var(--color-hue), 97%, 31%)')
            root.style.setProperty('--color-secondary', 'hsl(var(--color-hue), 9%, 89%)')
            root.style.setProperty('--color-icons', 'hsl(var(--color-hue), 6%, 21%)')
            root.style.setProperty('--color-bg', 'hsl(var(--color-hue), 0%, 100%)')
            root.style.setProperty('--color-text', 'hsl(var(--color-hue), 6%, 21%)')
        }
    }

    return { darkMode }
}