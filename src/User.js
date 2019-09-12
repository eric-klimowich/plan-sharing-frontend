import React, { Component } from 'react'

class User extends Component {

  state = {
    jwt: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: 'guy14',
          password: 'hi',
          bio: 'King of Flavortown, USA',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg'
        }
      })
    })
    .then(r => r.json())
    .then(user => {
      console.log(user)
      this.setState({
        jwt: user.jwt
      }, () => {
        fetch('http://localhost:3000/api/v1/profile', {
                method: 'GET',
                headers: {
                  Authorization: this.state.jwt
                }
              })
      })
    })
  }

  render() {
    console.log(this.state.jwt)
    return (
      <h1>In User</h1>
    )
  }
}

export default User
