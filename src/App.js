import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default App

