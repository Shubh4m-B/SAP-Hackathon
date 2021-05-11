import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Landing from './Landing'
import SignIn from './SingIn'
import LogIn from './LogIn'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Landing />}
          />
          <Route
            exact
            path="/login"
            render={() => <LogIn />}
          />
          <Route
            exact
            path="/signin"
            render={() => <SignIn />}
          />
        </Switch>
      </div>
    )
  }
}

export default App

