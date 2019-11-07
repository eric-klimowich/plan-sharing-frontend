import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ReturningUser from './ReturningUser'

class Home extends Component {
  render() {
    if (!!this.props.user) {
      return <Redirect to="/profile" />
    }
    return (
      <div className="home-page">
        <h1>Home</h1>
        <div className="login-container">
          <ReturningUser />
          <p>or</p>
          <Link className="main-nav__item--cta" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
