export default class Adapter {
  static headers() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static deleteToken() {
    localStorage.removeItem('token')
  }

  static getUserLogin(returningUser) {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: this.headers(),
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
      headers: this.headers(),
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

  static getLessons() {
    return fetch('http://localhost:3000/api/v1/lessons', {
      method: 'GET',
      headers: this.headers()
    })
    .then(r => r.json())
  }

  static postNewLesson(lesson) {
    return fetch('http://localhost:3000/api/v1/lessons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({
        lesson: {
          title: lesson.title,
          content: lesson.content,
          grade_name: lesson.grade,
          subject_name: lesson.subject
        }
      })
    })
    .then(r => r.json())
  }

}
