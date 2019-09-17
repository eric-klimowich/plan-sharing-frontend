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
