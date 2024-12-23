import { useThemeContext } from "../context/ThemeContext"
import { Moon, Sun } from "@phosphor-icons/react"

interface HeaderProps {
    className?: string
}

export function Header({ className }: HeaderProps) {
    const theme = useThemeContext()

    const handleClick = () => {
        theme.toggleTheme()
    }
    
    return (
        <header className={className}>
            <h2>Tema</h2>
            <button onClick={handleClick}>
                {theme.colorTheme === "dark" ? <Sun /> : <Moon /> }
            </button>
        </header>
    )
}
