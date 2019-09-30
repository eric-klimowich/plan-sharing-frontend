import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUser } from './actions'

class ReturningUser extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLoginUser = (event, returningUser) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: returningUser.username,
          password: returningUser.password
        }
      })
    })
    .then(r => r.json())
    .then(user => {
      this.props.setUser(user)
    })
  }

  handleChangeUserInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="login">
        <h1 className="login__heading">Please enter to login</h1>
        <form className="login-form" onSubmit={(event) => this.handleLoginUser(event, this.state)}>
          <input
            className="login-form__input"
            type="text"
            name="username"
            value={this.state.username}
            placeholder="enter username..."
            onChange={this.handleChangeUserInput}
          />
          <input
            className="login-form__input"
            type="text"
            name="password"
            value={this.state.password}
            placeholder="enter password..."
            onChange={this.handleChangeUserInput}
          />
          <input
            type="submit"
            name="submit"
            value="Submit"
          />
        </form>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReturningUser)
