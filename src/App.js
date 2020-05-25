import React from 'react'
import Header from './components/header'
import Nav from './components/nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Props from './components/props'
import Routing from './components/routing'
import State from './components/state'
import Home from './components/home'
import ContextPage from './components/context'

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/component' component={Header} />
        <Route path='/props' component={Props} />
        <Route path='/state' component={State} />
        <Route path='/routing' component={Routing} />
        <Route path='/context' component={ContextPage} />
      </div>
    </Router>
  )
}
