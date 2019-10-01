import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Lesson from './Lesson'

class LessonsContainer extends Component {

  state = {
    lessons: []
  }

  componentDidMount() {
    if (this.props.user) {
      fetch('http://localhost:3000/api/v1/lessons', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${this.props.user.jwt}`
        }
      })
      .then(r => r.json())
      .then(lessons => {
        this.setState({
          lessons
        })
      })
    }
  }

  render() {
    console.log(this.state)
    console.log(this.props.user)
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
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(LessonsContainer)
