import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Landing from './Landing'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Landing />
      </div>
    )
  }
}

export default App

