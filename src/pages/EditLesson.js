import React, { Component } from 'react'

import { renderAddLessonForm } from '../forms'
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
    return (
      renderAddLessonForm(this.handleAddLesson, this.state, this.handleChangeLessonInput, grades, subjects)
    )
  }
}

export default EditLesson
