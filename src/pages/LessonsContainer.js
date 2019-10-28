import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import AbridgedLessonCard from '../components/AbridgedLessonCard'
import FullLessonCard from '../components/FullLessonCard'
import Adapter from '../Adapter'

import { setLessons } from '../actions'

class LessonsContainer extends Component {
  renderLessons = () => {
    if (this.props.lessonToShow) {
      return (
        <FullLessonCard />
      )
    } else {
      return (
        <Fragment>
          {this.props.lessons.map(lesson => {
            return (
              <AbridgedLessonCard
                key={lesson.lesson_data.id}
                id={lesson.lesson_data.id}
                title={lesson.lesson_data.title}
                description={lesson.lesson_data.description}
                grade={lesson.lesson_data.grade}
                subject={lesson.lesson_data.subject}
                file_name={lesson.lesson_data.file_name}
                user={lesson.lesson_data.user}
              />
            )
          })}
        </Fragment>
      )
    }
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
    lessons: state.lessons,
    lessonToShow: state.lessonToShow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer)
