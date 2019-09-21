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
      this.setState({
        username: '',
        password: '',
        bio: '',
        avatar: ''
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="new-user">
        <h1 className="new-user__heading">Please enter to sign up</h1>
        <form className="new-user__form" onSubmit={(event) => this.handleSubmitNewUser(event, this.state)}>
          <input
            className="new-user__form-input"
            type="text"
            name="username"
            value={this.state.username}
            placeholder="enter username..."
            onChange={this.handleChangeUserInput}
          />
          <input
            className="new-user__form-input"
            type="text"
            name="password"
            value={this.state.password}
            placeholder="enter password..."
            onChange={this.handleChangeUserInput}
          />
          <textarea
            className="new-user__form-input"
            name="bio"
            value={this.state.bio}
            placeholder="enter bio..."
            onChange={this.handleChangeUserInput}
          />
          <input
            className="new-user__form-input"
            type="text"
            name="avatar"
            value={this.state.avatar}
            placeholder="enter avatar..."
            onChange={this.handleChangeUserInput}
          />
          <input
            clsssName="new-user__form-submit"
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
