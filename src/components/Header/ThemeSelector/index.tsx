import { useState } from "react"
import css from "./styles.module.scss"

export default function ThemeSelector () {
  const [theme, setTheme] = useState<'light'|'dark'>('light')

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    document.documentElement.setAttribute('data-theme', theme)
  }

  const themeIcons = {
    light: '🌞',
    dark: '🌚'
  }

  return (
    <div className={css["ThemeSelector"]} data-theme={theme}>
      <button onClick={changeTheme}>
        { themeIcons[theme] }
      </button>
    </div>
  )
}