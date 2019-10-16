import React, { Component } from 'react'
import { connect } from 'react-redux'

import Adapter from '../Adapter'

import { setUser } from '../actions'
import { renderLoginForm } from '../forms'

class ReturningUser extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLoginUser = (event, returningUser) => {
    event.preventDefault()
    Adapter.userLogin(returningUser)
    .then(r => r.json())
    .then(user => {
      this.props.setUser(user.user)
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
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturningUser)
