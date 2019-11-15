import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import history from './history'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NewUser from './pages/NewUser'
import AllLessons from './pages/AllLessons'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import MyLessons from './pages/MyLessons'
import AddLesson from './pages/AddLesson'
import EditLesson from './pages/EditLesson'
import RequestsContainer from './containers/RequestsContainer'
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
          <Navbar />
          {
            !!this.props.user ?
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/lessons" exact component={AllLessons} />
                <Route path="/requests" exact component={RequestsContainer} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/edit" exact component={EditProfile} />
                <Route path="/profile/my-lessons" exact component={MyLessons} />
                <Route path="/profile/add-lesson" exact component={AddLesson} />
                <Route path="/profile/edit-lesson" exact component={EditLesson} />
              </Fragment>
            :
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/signup" exact component={NewUser} />
                <Route path="/lessons" exact component={AllLessons} />
                <Route path="/requests" exact component={RequestsContainer} />
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
