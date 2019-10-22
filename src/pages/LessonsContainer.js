import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Lesson from '../elements/Lesson'
import Adapter from '../Adapter'

import { setLessons } from '../actions'


class LessonsContainer extends Component {

  renderLessons = () => {
    return (
      <Fragment>
        {this.props.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
              fileName={lesson.file_name}
            />
          )
        })}
      </Fragment>
    )
  }

  componentDidMount() {
    Adapter.getLessons()
      .then(lessons => this.props.setLessons(lessons))
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
