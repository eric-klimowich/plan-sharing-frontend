import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPickedLesson } from '../actions'

class AbridgedLessonCard extends Component {

  handleShowFullLessonCard = lesson => {
    this.props.setPickedLesson(lesson)
  }

  render() {
    return (
      <div className="short-lesson-plan">
        <h1 className="short-lesson-plan__title">{this.props.title}</h1>
        <p className="short-lesson-plan__grade">Grade: {this.props.grade}</p>
        <p className="short-lesson-plan__subject">Subject: {this.props.subject}</p>
        <button onClick={() => this.handleShowFullLessonCard(this.props)}>Details</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPickedLesson: (lesson) => dispatch(setPickedLesson(lesson))
  }
}

export default connect(null, mapDispatchToProps)(AbridgedLessonCard)
