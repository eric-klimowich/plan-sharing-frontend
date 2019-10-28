import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    console.log(this.props.lessonIdToEdit)
    return (
      renderLessonForm(this.handleAddLesson, this.state, this.handleChangeLessonInput, grades, subjects)
    )
  }
}

const mapStateToProps = state => {
  return {
    lessonIdToEdit: state.lessonIdToEdit
  }
}

export default connect(mapStateToProps)(EditLesson)
