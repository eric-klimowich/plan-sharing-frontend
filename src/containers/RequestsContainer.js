import React, { Component, Fragment } from 'react'
import Adapter from '../Adapter'
import Request from '../components/Request'
import AddRequest from '../components/AddRequest'

class RequestsContainer extends Component {

  state = {
    requests: []
  }

  componentDidMount() {
    Adapter.getRequests()
      .then(requests => this.setState({ requests }))
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        {this.state.requests.map(request => {
          return (
            <Request
              key={request.id}
              request={request}
            />
          )
        })}
        <AddRequest />
      </Fragment>
    )
  }
}

export default RequestsContainer
