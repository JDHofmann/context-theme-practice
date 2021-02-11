import './App.css';
import React, {useState, useMemo } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import { UserContext, ThemeContext, themes } from "./userContext"
import Navbar from './Navbar';

export default function App(){

  const [user, setUser] = useState(null)
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  const [theme, setTheme] = useState(themes.light)
  
 


  return (
    <BrowserRouter>

      <div
        className="wrapper" 
        style={{color: theme.text, background: theme.background}}
      >
        <ThemeContext.Provider value={{theme, setTheme}}>
          <Navbar />
        </ThemeContext.Provider>
        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  )
}