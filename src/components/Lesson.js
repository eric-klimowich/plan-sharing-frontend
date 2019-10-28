import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Adapter from '../Adapter'

import { API } from '../Adapter'

import { setLessonToEdit } from '../actions'

class Lesson extends Component {

  handleEditLesson = (event, lesson) => {
    this.props.setLessonToEdit(lesson)
    this.props.history.push('/profile/edit-lesson')
  }

  handleDeleteLesson = (event) => {
    event.preventDefault()
    Adapter.deleteLesson(this.props.id)
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>Grade: {this.props.grade}</p>
        <p>Subject: {this.props.subject}</p>
        <p>Created by: {this.props.user}</p>
        <a href={`${API}/api/v1/lessons/${this.props.id}`}>
          {this.props.fileName}
        </a>
        <br/>
        <button onClick={(event) => this.handleEditLesson(event, this.props)}>Edit</button>
        <button onClick={this.handleDeleteLesson}>Delete</button>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessonToEdit: (lesson) => dispatch(setLessonToEdit(lesson))
  }
}

export default connect(null, mapDispatchToProps)(Lesson)
