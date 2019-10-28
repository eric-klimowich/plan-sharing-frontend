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

  handleChangeLessonInput = event => {
    if (event.target.files) {
      this.setState({
        [event.target.name]: event.target.files[0]
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleEditLesson = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      renderLessonForm(this.handleEditLesson, this.state, this.handleChangeLessonInput, grades, subjects)
    )
  }
}

const mapStateToProps = state => {
  return {
    lessonToEdit: state.lessonToEdit
  }
}

export default connect(mapStateToProps)(EditLesson)
