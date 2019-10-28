import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Lesson from '../components/Lesson'
import Adapter from '../Adapter'

import { setLessons } from '../actions'

class LessonsContainer extends Component {
  renderLessons = () => {
    return (
      <Fragment>
        {this.props.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.lesson_data.id}
              id={lesson.lesson_data.id}
              title={lesson.lesson_data.title}
              description={lesson.lesson_data.description}
              grade={lesson.lesson_data.grade}
              subject={lesson.lesson_data.subject}
              user={lesson.lesson_data.user}
              fileName={lesson.lesson_data.file_name}
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
