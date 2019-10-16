export default class Adapter {
  static userLogin(returningUser) {
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
  }
}
