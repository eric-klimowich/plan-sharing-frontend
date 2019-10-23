import React, { Component, Fragment } from 'react'

import Adapter from '../Adapter'

import { HAPI } from '../Adapter'

class Lesson extends Component {

  handleDeleteLesson = (event) => {
    event.preventDefault()
    Adapter.deleteLesson(this.props.id)
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>Grade: {this.props.grade}</p>
        <p>Subject: {this.props.subject}</p>
        <p>Created by: {this.props.user}</p>
        <a href={`${HAPI}/api/v1/lessons/${this.props.id}`}>
          {this.props.fileName}
        </a>
        <button onClick={this.handleDeleteLesson}>Delete</button>
      </Fragment>
    )
  }
}

export default Lesson
