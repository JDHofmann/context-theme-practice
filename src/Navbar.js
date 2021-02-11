import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import { ThemeContext, themes } from "./userContext"


export default function Navbar() {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        // let newTheme;
        theme === themes.light ? setTheme(themes.dark) :
        setTheme(themes.light)
    }
    return (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button onClick={() => toggleTheme()}>Dark</button>
          </li>
        </ul>
    )
}