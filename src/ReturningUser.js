import React, { Component } from 'react'

class ReturningUser extends Component {

  state = {
    username: '',
    password: '',
    bio: '',
    avatar: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNn0.NgWG9a51H9jd4Rw0Qi5qFiuqF3OF_IODNqbnHzAZ1w8'
      }
    })
    .then(r => r.json())
    .then(console.log)
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

export default ReturningUser
