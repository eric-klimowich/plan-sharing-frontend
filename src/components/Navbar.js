import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Adapter from '../Adapter'

import { setUser } from '../actions'

class Navbar extends Component {

  handleLogout = () => {
    Adapter.deleteToken()
    this.props.history.push("/login")
    this.props.setUser(null)
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
            <Fragment>
              <nav className="main-nav">
                <ul className="main-nav__items">
                  <li className="main-nav__item">
                    <Link to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link to="/lessons">
                      All Lessons
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link to="/profile/addlesson">
                      Add Lesson
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <button className="main-nav__item logout-btn" onClick={this.handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </Fragment>
            :
            <Fragment>
              <nav className="main-nav">
                <ul className="main-nav__items">
                  <li className="main-nav__item">
                    <Link to="/lessons">
                      All Lessons
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link to="/about">
                      About
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="main-nav__item--cta">
                    <Link to="/signup">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </nav>
            </Fragment>
        }
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
