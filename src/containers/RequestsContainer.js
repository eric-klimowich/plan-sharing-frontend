import React, { Component, Fragment } from 'react'
import AddRequest from '../components/AddRequest'

class RequestsContainer extends Component {
  render() {
    return (
      <Fragment>
        <div>In RequestsContainer</div>
        <AddRequest />
      </Fragment>
    )
  }
}

export default RequestsContainer
