import React, { Component } from 'react'
import { connect } from 'react-redux'

import { renderAddLessonForm } from '../forms'

const grades = ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
const subjects = ["ELA", "Math", "Science", "Social Studies", "Art", "Music", "PE"]

class AddLesson extends Component {

  state = {
    title: '',
    content: '',
    grade: '',
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
          grade_name: lesson.grade,
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
    // console.log(this.state)
    return (
      renderAddLessonForm(this.handleAddLesson, this.state, this.handleChangeLessonInput, grades, subjects)
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddLesson)
