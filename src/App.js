import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import { UserContext } from "./userContext"

export default function App(){

  const [value, setValue] = useState("hello from context")

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
        <UserContext.Provider value={{value, setValue}}>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  )
}