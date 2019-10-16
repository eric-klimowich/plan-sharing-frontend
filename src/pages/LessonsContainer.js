import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Lesson from '../elements/Lesson'
import Adapter from '../Adapter'

class LessonsContainer extends Component {

  state = {
    lessons: []
  }

  renderLessons = () => {
    return (
      <Fragment>
        {this.state.lessons.map(lesson => {
          return (
            <Lesson key={lesson.id} title={lesson.title} content={lesson.content} />
          )
        })}
      </Fragment>
    )
  }

  componentDidMount() {
    Adapter.getLessons()
      .then(lessons => {
        this.setState({
          lessons
        })
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
    user: state.user
  }
}

export default connect(mapStateToProps)(LessonsContainer)
