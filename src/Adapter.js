import { BadTokenError } from './error'

export const API = 'http://localhost:3000'

// export const API = 'https://plan-sharing-backend.herokuapp.com'

export default class Adapter {
  static headers() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  static headersWithAuth() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
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
      headers: this.headersWithAuth()
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

  static getMyLessons() {
    return fetch('http://localhost:3000/api/v1/my_lessons', {
      method: 'GET',
      headers: this.headersWithAuth()
    })
    .then(r => r.json())
  }

  static postNewLesson(file, lesson) {
    return fetch(`${API}/api/v1/lessons`, {
      method: 'POST',
      headers: this.headersWithAuth(),
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

  static patchLessonWithFile(file, lesson, id) {
    return fetch(`${API}/api/v1/lessons/${id}`, {
      method: 'PATCH',
      headers: this.headersWithAuth(),
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

  static patchLessonWithoutFile(lesson, id) {
    return fetch(`${API}/api/v1/lessons/${id}`, {
      method: 'PATCH',
      headers: this.headersWithAuth(),
      body: JSON.stringify({
        lesson: {
          title: lesson.title,
          description: lesson.description,
          grade_name: lesson.grade,
          subject_name: lesson.subject,
          file: lesson.fileData,
          file_name: lesson.fileName
        }
      })
    })
    .then(r => r.json())
  }

  static deleteLesson(id) {
    return fetch(`${API}/api/v1/lessons/${id}`, {
      method: 'DELETE'
    })
  }

}
