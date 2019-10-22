import React, { Component } from 'react'
import { connect } from 'react-redux'

import Adapter from '../Adapter'

import { renderAddLessonForm } from '../forms'
import { grades } from '../constants'
import { subjects } from '../constants'

class AddLesson extends Component {

  state = {
    title: '',
    description: '',
    grade: '',
    subject: '',
    file: ''
  }

  handleAddLesson = (event, lesson) => {
    event.preventDefault()
    Adapter.postNewLesson(lesson)
    this.setState({
      title: '',
      description: '',
      grade: '',
      subject: '',
      file: ''
    })
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

  convertFiletoBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    })
  }

  render() {
    console.log(this.state)
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
