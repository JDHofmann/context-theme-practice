import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from './Home'
import About from './About'

export default function App(){
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
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
  )
}