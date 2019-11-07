import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { setUser } from '../actions'
import { setPickedLesson } from '../actions'
import { renderLoggedInNav } from '../navs'
import { renderLoggedOutNav } from '../navs'

class Navbar extends Component {

  handleLogout = () => {
    Adapter.deleteToken()
    this.props.setUser(null)
    this.props.history.push("/")
  }

  handleResetPickedLesson = () => {
    this.props.setPickedLesson(null)
  }

  render() {
    return (
      <header className="main-header">
        <div className="main-header__title">
          <Link to="/">
            Plan Sharing
          </Link>
        </div>
        {
          !!this.props.user ?
            renderLoggedInNav(this.handleResetPickedLesson, this.handleLogout)
          :
            renderLoggedOutNav(this.handleResetPickedLesson)
        }
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    history: state.history
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    setPickedLesson: (user) => dispatch(setPickedLesson(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
