import React, { Component } from 'react'
import { connect } from 'react-redux'

const subjects = ["ELA", "Math", "Science", "Social Studies", "Art", "Music", "PE"]

class AddLesson extends Component {

  state = {
    title: '',
    content: '',
    subject: ''
  }

  handleAddLesson = (event, lesson) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/lessons', {
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
          subject_name: lesson.subject
        }
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  handleChangeLessonInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="add-lesson">
        <h1 className="add-lesson__heading">Enter Lesson Info</h1>
        <form className="add-lesson-form" onSubmit={(event) => this.handleAddLesson(event, this.state)}>
          <input
            className="add-lesson-form__input"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="enter title..."
            onChange={this.handleChangeLessonInput}
          />
          <input
            className="add-lesson-form__input"
            type="text"
            name="content"
            value={this.state.content}
            placeholder="enter content..."
            onChange={this.handleChangeLessonInput}
          />
          <select
            className="add-lesson-form__input"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChangeLessonInput}
          >
            <option>Subject</option>
              {subjects.map(subject => {
                return (
                  <option key={subject} value={subject} >{subject}</option>
                )})
              }
          </select>
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddLesson)
