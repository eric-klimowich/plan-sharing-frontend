import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { setUser } from '../actions'
import { renderLoggedInNav } from '../navs'
import { renderLoggedOutNav } from '../navs'
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
            renderLoggedInNav(this.handleLogout)
            :
            renderLoggedOutNav()
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
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
