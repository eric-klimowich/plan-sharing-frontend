import React, { Component } from 'react'
import { connect } from 'react-redux'

import Adapter from '../Adapter'

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

const mapStateToProps = state => {
  return {
    lessonToEdit: state.lessonToEdit
  }
}

export default connect(mapStateToProps)(EditLesson)
