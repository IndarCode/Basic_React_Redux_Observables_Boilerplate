import { ThemeProvider } from '@material-ui/styles'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import UserList from './components/user-list';
import UserView from './components/user-view';
import CreateUserForm from './components/create-user';
import { muiTheme } from './themes/mui-theme'

export class App extends Component {
  render() {
    console.log(this.props, "****************")
    return (
      <ThemeProvider theme={muiTheme()}>
        <div>
        <Router>
          <div>

            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/" render={(props) => <UserList {...props} /> } />
              <Route path="/user/:userId" render={(props) => <UserView userId={props.match.params.userId} {...props} /> } />
              <Route path="/create-user" render={(props) => <CreateUserForm {...props} /> } />
            </Switch>
          </div>
        </Router>
        </div>
      </ThemeProvider>
    )
  }
}

export default App

