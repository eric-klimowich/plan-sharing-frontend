import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setPickedLesson } from '../actions'

class AbridgedLessonCard extends Component {

  handleShowLesson = (event, lesson) => {
    this.props.setPickedLesson(lesson)
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <p>Grade: {this.props.grade}</p>
        <p>Subject: {this.props.subject}</p>
        <button onClick={(event) => this.handleShowLesson(event, this.props)}>Details</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    lessonToShow: state.lessonToShow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPickedLesson: (lesson) => dispatch(setPickedLesson(lesson))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AbridgedLessonCard)
