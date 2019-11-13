import React, { Fragment } from 'react'

const Request = props => {
  return (
    <Fragment>
      <h1>{props.request.title}</h1>
      <p>{props.request.content}</p>
    </Fragment>
  )
}

export default Request
