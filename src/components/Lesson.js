import React, { Component, Fragment } from 'react'

import Adapter from '../Adapter'

import { API } from '../Adapter'

class Lesson extends Component {

  handleEditLesson = (event) => {
    console.log(event.target)
  }

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
        <a href={`${API}/api/v1/lessons/${this.props.id}`}>
          {this.props.fileName}
        </a>
        <br/>
        <button onClick={this.handleEditLesson}>Edit</button>
        <button onClick={this.handleDeleteLesson}>Delete</button>
      </Fragment>
    )
  }
}

export default Lesson
