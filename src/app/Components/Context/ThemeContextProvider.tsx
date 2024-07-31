"use client"
import React from 'react'


export const ThemeContext = React.createContext<any>(() => { })

export const useTheme = () => {
    return React.useContext(ThemeContext)
}
export default function ThemeContextProvider({ children }: any) {

    const [themeColor, setThemeColor] = React.useState('light')

    React.useEffect(() => {
        themeColor === 'dark'
            ? document.querySelector("html")?.classList.add("dark")
            : document.querySelector("html")?.classList.remove("dark");

    }, [themeColor])

    const toggleTheme = () => {

        setThemeColor((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
        console.log(themeColor)
    }

    return (
        <ThemeContext.Provider value={toggleTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
