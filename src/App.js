import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import Home from './Home'
import ReturningUser from './ReturningUser'
import NewUser from './NewUser'
import LessonsContainer from './LessonsContainer'
import Profile from './Profile'
import AddLesson from './AddLesson'

class App extends Component {
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

export default App;
