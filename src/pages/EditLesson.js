import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Adapter from '../Adapter'

import { renderLessonForm } from '../forms'
import { grades } from '../constants'
import { subjects } from '../constants'
import { hideEditLessonForm } from '../actions'

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
      <Fragment>
      {renderLessonForm(this.handleEditLesson, this.state, this.handleChangeLessonInput, grades, subjects)}
      <button>Cancel</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pickedLesson: state.pickedLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideEditLessonForm: () => dispatch(hideEditLessonForm())
  }
}

export default connect(mapStateToProps)(EditLesson)
