import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUser } from '../actions'
import { renderNewUserForm } from '../forms'

class NewUser extends Component {

  state = {
    username: '',
    password: '',
    bio: '',
    avatar: ''
  }

  handleChangeUserInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitNewUser = (event, newUser) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: newUser.username,
          password: newUser.password,
          bio: newUser.bio,
          avatar: newUser.avatar
        }
      })
    })
      .then(r => r.json())
      .then(user => {
        this.props.setUser(user.user)
        localStorage.setItem('token', user.jwt)
        this.props.history.push('/profile')
      })
      this.setState({
        username: '',
        password: '',
        bio: '',
        avatar: ''
      })
  }

  render() {
    return (
      renderNewUserForm(this.handleSubmitNewUser, this.state, this.handleChangeUserInput)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
