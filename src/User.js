import React, { Component } from 'react'

class User extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: 'guy2',
          password: 'hi',
          bio: 'King of Flavortown, USA',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg'
        }
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    return (
      <h1>In User</h1>
    )
  }
}

export default User
