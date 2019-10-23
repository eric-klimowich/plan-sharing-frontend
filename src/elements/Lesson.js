import React, { Component, Fragment } from 'react'

import Adapter from '../Adapter'

class Lesson extends Component {

  handleDeleteLesson = (event) => {
    console.log(event.target)
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/lessons/${this.props.id}`, {
      method: 'DELETE'
    })
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>Grade: {this.props.grade}</p>
        <p>Subject: {this.props.subject}</p>
        <p>Created by: {this.props.user}</p>
        <a href={`http://localhost:3000/api/v1/lessons/${this.props.id}`}>
          {this.props.fileName}
        </a>
        <button onClick={this.handleDeleteLesson}>Delete</button>
      </Fragment>
    )
  }
}

export default Lesson
