import React, { Fragment } from 'react'

const Lesson = props => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Fragment>
  )
}

export default Lesson
