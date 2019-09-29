import React, { Component, Fragment } from 'react'

import Lesson from './Lesson'

class LessonsContainer extends Component {

  state = {
    lessons: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/lessons', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.O0la-F93yrPjznLJJGn2wNIVKhQLR3YQrIimZaf211o'
      }
    })
    .then(r => r.json())
    .then(lessons => {
      this.setState({
        lessons
      })
    })
  }

  render() {
    console.log(this.state)
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

export default LessonsContainer
