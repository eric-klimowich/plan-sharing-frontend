import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { API } from '../Adapter'
import { setPickedLesson } from '../actions'
import { showEditLessonForm } from '../actions'
import { deleteLesson } from '../actions'
import CommentsContainer from '../containers/CommentsContainer'

class FullLessonCard extends Component {

  handleEditLesson = (event) => {
    this.props.showEditLessonForm()
  }

  handleDeleteLesson = (event) => {
    event.preventDefault()
    Adapter.deleteLesson(this.props.pickedLesson.id)
    this.props.deleteLesson(this.props.pickedLesson)
    this.props.setPickedLesson(null)}

  renderEditAndDeleteButtons = () => {
    if (this.props.user && (this.props.pickedLesson.user_id === this.props.user.id)) {
      return (
        <Fragment>
          <button onClick={this.handleEditLesson}>Edit</button>
          <button onClick={this.handleDeleteLesson}>Delete</button>
        </Fragment>
      )
    } else {
      return null
    }
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
      <div className="full-lesson-plan">
        <h1>{this.props.pickedLesson.title}</h1>
        <p>{this.props.pickedLesson.description}</p>
        <p>Grade: {this.props.pickedLesson.grade}</p>
        <p>Subject: {this.props.pickedLesson.subject}</p>
        <p>Created by: {this.props.pickedLesson.user}</p>
        <a href={`${API}/api/v1/lessons/${this.props.pickedLesson.id}`}>
          {this.props.pickedLesson.file_name}
        </a>
        <br/>
        {this.renderEditAndDeleteButtons()}
        <button onClick={this.handleBackToAllLessons}>Back to All Lessons</button>
        <CommentsContainer comments={this.props.pickedLesson.comments}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    pickedLesson: state.pickedLesson,
    history: state.history,
    editingLesson: state.editingLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPickedLesson: (lesson) => dispatch(setPickedLesson(lesson)),
    deleteLesson: (lesson) => dispatch(deleteLesson(lesson)),
    showEditLessonForm: () => dispatch(showEditLessonForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullLessonCard)
