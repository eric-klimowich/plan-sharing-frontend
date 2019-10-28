import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
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
import EditLesson from './pages/EditLesson'
import Adapter from './Adapter'
import { setUser } from './actions'
import { setHistory } from './actions'

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
    this.props.setHistory(history)
  }

  render(props) {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          {
            !!this.props.user ?
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/lessons" exact component={LessonsContainer} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/add-lesson" exact component={AddLesson} />
                <Route path="/profile/edit-lesson" exact component={EditLesson} />
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
        </BrowserRouter>
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
    setHistory: (history) => dispatch(setHistory(history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
