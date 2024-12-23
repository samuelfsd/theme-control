import { useThemeContext } from "../context/ThemeContext";

interface FooterProps {
    className?: string; 
}

export function Footer({className}: FooterProps) {
    const theme = useThemeContext() 

    return (
        <h3 className={className}>Tema atual: {theme.colorTheme}</h3>
    )
} 