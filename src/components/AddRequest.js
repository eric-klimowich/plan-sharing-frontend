import React, { Component } from 'react'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { renderAddRequestForm } from '../forms'

class AddRequest extends Component {

  state = {
    title: '',
    content: ''
  }

  handleRequestInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitRequest = event => {
    event.preventDefault()
    Adapter.postRequest(this.state, this.props.user.id)
      .then(console.log)
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    return (
      renderAddRequestForm(this.handleSubmitRequest, this.handleRequestInputChange, this.state)
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddRequest)
