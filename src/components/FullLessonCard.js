import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Adapter from '../Adapter'

import { API } from '../Adapter'

import { setLessonToEdit } from '../actions'
import { setLessonToShow } from '../actions'

class FullLessonCard extends Component {

  handleEditLesson = (event, lesson) => {
    this.props.setLessonToEdit(lesson)
    this.props.history.push('/profile/edit-lesson')
  }

  handleDeleteLesson = (event) => {
    event.preventDefault()
    Adapter.deleteLesson(this.props.id)
  }

  handleBackToAllLessons = () => {
    this.props.setLessonToShow(null)
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <h1>{this.props.lessonToShow.title}</h1>
        <p>{this.props.lessonToShow.description}</p>
        <p>Grade: {this.props.lessonToShow.grade}</p>
        <p>Subject: {this.props.lessonToShow.subject}</p>
        <p>Created by: {this.props.lessonToShow.user}</p>
        <a href={`${API}/api/v1/lessons/${this.props.lessonToShow.id}`}>
          {this.props.lessonToShow.file_name}
        </a>
        <br/>
        <button onClick={(event) => this.handleEditLesson(event, this.props)}>Edit</button>
        <button onClick={this.handleDeleteLesson}>Delete</button>
        <button onClick={this.handleBackToAllLessons}>Back to All Lessons</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    lessonToShow: state.lessonToShow,
    history: state.history
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessonToShow: (lesson) => dispatch(setLessonToShow(lesson)),
    setLessonToEdit: (lesson) => dispatch(setLessonToEdit(lesson))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullLessonCard)
