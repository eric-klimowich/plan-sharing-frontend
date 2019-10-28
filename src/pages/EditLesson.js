import React, { Component } from 'react'

import { renderLessonForm } from '../forms'
import { grades } from '../constants'
import { subjects } from '../constants'

class EditLesson extends Component {

  state = {
    title: '',
    description: '',
    grade: '',
    subject: '',
    file: '',
    fileName: ''
  }

  render() {
    console.log(this.props)
    return (
      renderLessonForm(this.handleAddLesson, this.state, this.handleChangeLessonInput, grades, subjects)
    )
  }
}

export default EditLesson
