import {createContext} from 'react'

export const themes = {
    light: {
        background: "#eeffff",
        text: "#101040"
    },
    dark: {
        background: "#101040",
        text: "#eeffff"
    }
}

export const UserContext = createContext(null);
export const ThemeContext = createContext({theme: themes.light, toggleTheme: () => {}});