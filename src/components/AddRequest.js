import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    fetch('http://localhost:3000/api/v1/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        user_id: this.props.user.id
      })
    })
    .then(r => r.json())
      .then(console.log)
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="add-request">
        <h1 className="add-request__heading">Enter Request</h1>
        <form className="add-request-form" onSubmit={this.handleSubmitRequest}>
          <input
            className="add-request-form__input"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="enter title..."
            onChange={this.handleRequestInputChange}
          />
          <input
            className="add-request-form__input"
            type="text"
            name="content"
            value={this.state.content}
            placeholder="enter description..."
            onChange={this.handleRequestInputChange}
          />
          <input
            type="submit"
            name="submit"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddRequest)
