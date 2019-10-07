import React, { Fragment } from 'react'

const Lesson = props => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </Fragment>
  )
}

export default Lesson
