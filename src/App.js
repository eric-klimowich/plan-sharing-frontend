import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Navbar from './elements/Navbar'
import Home from './pages/Home'
import ReturningUser from './pages/ReturningUser'
import NewUser from './pages/NewUser'
import LessonsContainer from './pages/LessonsContainer'
import Profile from './pages/Profile'
import AddLesson from './pages/AddLesson'

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
