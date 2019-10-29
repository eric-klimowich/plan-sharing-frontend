import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AbridgedLessonCard from '../components/AbridgedLessonCard'
import FullLessonCard from '../components/FullLessonCard'

class LessonsContainer extends Component {
  renderLessons = () => {
    if (this.props.pickedLesson) {
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

  render() {
    console.log(this.props)
    return (
      this.renderLessons()
    )
  }
}

const mapStateToProps = state => {
  return {
    pickedLesson: state.pickedLesson
  }
}

export default connect(mapStateToProps)(LessonsContainer)
