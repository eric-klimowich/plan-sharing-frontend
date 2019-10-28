import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import AbridgedLessonCard from '../components/AbridgedLessonCard'
import Adapter from '../Adapter'

import { setLessons } from '../actions'

class LessonsContainer extends Component {
  renderLessons = () => {
    return (
      <Fragment>
        {this.props.lessons.map(lesson => {
          return (
            <AbridgedLessonCard
              key={lesson.lesson_data.id}
              id={lesson.lesson_data.id}
              title={lesson.lesson_data.title}
              grade={lesson.lesson_data.grade}
              subject={lesson.lesson_data.subject}
            />
          )
        })}
      </Fragment>
    )
  }

  componentDidMount() {
    Adapter.getLessons()
      .then(lessons => {
        this.props.setLessons(lessons)
      })
  }

  render() {
    console.log(this.props)
    return (
      this.renderLessons()
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    lessons: state.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer)
