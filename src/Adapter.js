import { BadTokenError } from './error'

const API = 'http://localhost:3000'

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

  static getLoggedInUserToken() {
    return fetch(`${API}/api/v1/logged_in_user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(r => {
      if (r.ok) {
        return r.json()
      } else if (r.status === 401) {
        throw new BadTokenError("Bad token.")
      } else {
        throw new Error("Unhandled error.")
      }
    })
  }

  static getUserLogin(returningUser) {
    return fetch(`${API}/api/v1/login`, {
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
    return fetch(`${API}/api/v1/users`, {
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
    return fetch(`${API}/api/v1/lessons`, {
      method: 'GET',
      headers: this.headers()
    })
    .then(r => r.json())
  }

  static postNewLesson(file, lesson) {
    return fetch(`${API}/api/v1/lessons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({
        lesson: {
          title: lesson.title,
          description: lesson.description,
          grade_name: lesson.grade,
          subject_name: lesson.subject,
          file: file,
          file_name: lesson.fileName
        }
      })
    })
    .then(r => r.json())
  }

  static deleteLesson(id) {
    return fetch(`${API}/api/v1/lessons/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.getToken()}`
      }
    })
    .then(r => r.json())
  }

}
