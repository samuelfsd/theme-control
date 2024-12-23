import { createContext, ReactNode, useContext, useState } from "react";
import styles from '../app.module.css'

interface ThemeContextProps {
    colorTheme: string
    toggleTheme: () => void 
}

const ThemeContext = createContext({} as ThemeContextProps); 

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({children}: ThemeProviderProps) {
    const [colorTheme, setColorTheme] = useState("dark")

    const toggleTheme = () => {
        setColorTheme(colorTheme === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{ colorTheme, toggleTheme}}>
            <div className={`${styles.main} ${colorTheme === 'dark' ? styles.dark : styles.light}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export function useThemeContext () {
    const contex = useContext(ThemeContext)
    return contex;
}