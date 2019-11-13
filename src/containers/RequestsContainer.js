import React, { Component, Fragment } from 'react'
import AddRequest from '../components/AddRequest'

class RequestsContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/requests', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(r => r.json())
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
