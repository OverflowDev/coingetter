import {useState, useEffect} from 'react'

function Darkmode() {

    const [theme, setTheme] = useState(localStorage.theme)
    // const [theme, setTheme] = useState('dark')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    
    useEffect(() => {
        const rootElement = window.document.documentElement

        rootElement.classList.remove(colorTheme)
        rootElement.classList.add(theme)
        // optional 
        localStorage.setItem('theme', theme)

    }, [theme, colorTheme])

  return (
        <div>
            <button 
            className='dark:text-white '
            onClick={() => setTheme(colorTheme)}
            >
            {
            theme === 'light' ? 
            <ion-icon name="moon-outline" size='large'></ion-icon>
            :
            <ion-icon name="sunny-outline" size='large'></ion-icon>
            }
            </button>
        </div>
  )
}

export default Darkmode