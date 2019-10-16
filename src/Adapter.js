export default class Adapter {
  static getUserLogin(returningUser) {
    return fetch('http://localhost:3000/api/v1/login', {
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
  }

  static postUserSignup(newUser) {
    return fetch('http://localhost:3000/api/v1/users', {
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
  }

}
