import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUser } from '../actions'
import { renderLoginForm } from '../forms'
import { setJwt } from '../actions'

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
      this.props.setUser(user.user)
      this.props.setJwt(user.jwt)
      localStorage.setItem('token', user.jwt)
      this.props.history.push('/profile')
    })
    this.setState({
      username: '',
      password: ''
    })
  }

  handleChangeUserInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      renderLoginForm(this.handleLoginUser, this.state, this.handleChangeUserInput)
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
    setUser: (user) => dispatch(setUser(user)),
    setJwt: (jwt) => dispatch(setJwt(jwt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturningUser)
