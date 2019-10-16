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

  static getLessons() {
    return fetch('http://localhost:3000/api/v1/lessons', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      }
    })
    .then(r => r.json())
  }

  static postNewLesson(lesson) {
    return fetch('http://localhost:3000/api/v1/lessons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
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
