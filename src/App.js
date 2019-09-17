import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import User from './User'
import Home from './Home'
import Profile from './Profile'
import NewUser from './NewUser'
import ReturningUser from './ReturningUser'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={ReturningUser} />
        <Route path="/signup" exact component={NewUser} />
        <Route path="/profile" exact component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
