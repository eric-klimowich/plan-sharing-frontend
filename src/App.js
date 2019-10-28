import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import history from './history'

import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ReturningUser from './pages/ReturningUser'
import NewUser from './pages/NewUser'
import LessonsContainer from './pages/LessonsContainer'
import Profile from './pages/Profile'
import AddLesson from './pages/AddLesson'
import Adapter from './Adapter'

import { setUser } from './actions'

class App extends Component {

  componentDidMount() {
    Adapter.getLoggedInUserToken()
      .then(user => {
        this.props.setUser(user)
      })
      .catch(err => {
        console.warn(err)
        localStorage.removeItem('token')
      })
  }

  render(props) {
    return (
      <div className="App">
        <Router history={history}>
          <Navbar history={history} {...props}/>
          {
            !!this.props.user ?
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/lessons" exact component={LessonsContainer} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/addlesson" exact component={AddLesson} />
              </Fragment>
            :
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/login" exact component={ReturningUser} />
                <Route path="/signup" exact component={NewUser} />
                <Route path="/lessons" exact component={LessonsContainer} />
              </Fragment>
          }
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
