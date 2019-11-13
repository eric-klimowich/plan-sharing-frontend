import React, { Component, Fragment } from 'react'
import Adapter from '../Adapter'
import AddRequest from '../components/AddRequest'

class RequestsContainer extends Component {

  componentDidMount() {
    Adapter.getRequests()
      .then(console.log)
  }

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
