import React, { Component } from 'react'

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
      .then(console.log)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="enter username..."
            onChange={this.handleChangeUserInput}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="enter password..."
            onChange={this.handleChangeUserInput}
          />
          <textarea
            name="bio"
            value={this.state.bio}
            placeholder="enter bio..."
            onChange={this.handleChangeUserInput}
          />
          <input
            type="text"
            name="avatar"
            value={this.state.avatar}
            placeholder="enter avatar..."
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

export default NewUser
