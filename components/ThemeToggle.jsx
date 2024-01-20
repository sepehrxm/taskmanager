'use client'
import { BsMoonFill, BsSunFill} from 'react-icons/bs'
import { useState } from 'react'

const themes = {
    cupcake: 'cupcake',
    forest: 'forest'
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState(themes.cupcake)
    const toggle = () => {
        const newTheme = theme === themes.cupcake ? themes.forest : themes.cupcake
        document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(newTheme)
    }
  return (
    <button onClick={toggle} className="btn btn-outline btn-sm">
        {theme === 'cupcake' ? <BsMoonFill className='h-4 w-4'/> : <BsSunFill className='h-4 w-4'/>}
    </button>
  )
}
export default ThemeToggle