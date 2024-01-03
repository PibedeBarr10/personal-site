enum MODES {
    light = 'light',
    dark = 'dark'
}

type TMode = `${MODES}`

const theme: TMode = (() => {
    if (localStorage) {
        const themeStorageValue = localStorage.getItem('theme') ?? MODES.light

        if (Object.keys(MODES).includes(themeStorageValue)) {
            return themeStorageValue as TMode
        }
    }

    if (window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return MODES.dark
    }

    return MODES.light
})()

if (theme === MODES.light) {
	document.documentElement.classList.remove(MODES.dark)
} else {
	document.documentElement.classList.add(MODES.dark)
}
window.localStorage.setItem('theme', theme)
