import React, { Fragment } from 'react'

const Lesson = props => {
  console.log(props)
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Grade: {props.grade}</p>
      <p>Subject: {props.subject}</p>
      <p>Created by: {props.user}</p>
      <a href={`http://localhost:3000/api/v1/lessons/${props.id}`}>
        {props.fileName}
      </a>
      <button>Delete</button>
    </Fragment>
  )
}

export default Lesson
