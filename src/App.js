import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import Navbar from './elements/Navbar'
import Home from './pages/Home'
import ReturningUser from './pages/ReturningUser'
import NewUser from './pages/NewUser'
import LessonsContainer from './pages/LessonsContainer'
import Profile from './pages/Profile'
import AddLesson from './pages/AddLesson'

import { setUser } from './actions'
import { BadTokenError } from './error'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/logged_in_user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(r => {
      if (r.ok) {
        return r.json()
      } else if (r.status === 401) {
        throw new BadTokenError("Bad token.")
      } else {
        throw new Error("Unhandled error.")
      }
    })
    .then(user => {
      console.log(user)
      this.props.setUser(user)
    })
    .catch(err => {
      console.warn(err)
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={ReturningUser} />
          <Route path="/signup" exact component={NewUser} />
          <Route path="/lessons" exact component={LessonsContainer} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/addlesson" exact component={AddLesson} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(App);
