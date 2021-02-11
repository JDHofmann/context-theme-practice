import './App.css';
import React, {useState, useMemo } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import { UserContext } from "./userContext"

export default function App(){

  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])
  return (
    <BrowserRouter>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  )
}