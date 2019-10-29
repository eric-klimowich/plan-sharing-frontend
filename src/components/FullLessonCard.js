import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { API } from '../Adapter'
import { setPickedLesson } from '../actions'
import { showEditLessonForm } from '../actions'

class FullLessonCard extends Component {

  handleEditLesson = (event) => {
    this.props.showEditLessonForm()
  }

  handleDeleteLesson = (event) => {
    event.preventDefault()
    Adapter.deleteLesson(this.props.pickedLesson.id)
  }

  handleBackToAllLessons = () => {
    this.props.setPickedLesson(null)
  }

  render() {
    console.log(this.props)
    if (this.props.editingLesson) {
      return <Redirect to="/profile/edit-lesson" />
    }
    return (
      <Fragment>
        <h1>{this.props.pickedLesson.title}</h1>
        <p>{this.props.pickedLesson.description}</p>
        <p>Grade: {this.props.pickedLesson.grade}</p>
        <p>Subject: {this.props.pickedLesson.subject}</p>
        <p>Created by: {this.props.pickedLesson.user}</p>
        <a href={`${API}/api/v1/lessons/${this.props.pickedLesson.id}`}>
          {this.props.pickedLesson.file_name}
        </a>
        <br/>
        <button onClick={this.handleEditLesson}>Edit</button>
        <button onClick={this.handleDeleteLesson}>Delete</button>
        <button onClick={this.handleBackToAllLessons}>Back to All Lessons</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pickedLesson: state.pickedLesson,
    history: state.history,
    editingLesson: state.editingLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPickedLesson: (lesson) => dispatch(setPickedLesson(lesson)),
    showEditLessonForm: () => dispatch(showEditLessonForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullLessonCard)