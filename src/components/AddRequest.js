import React, { Component } from 'react'

class AddRequest extends Component {

  state = {
    title: '',
    description: ''
  }

  handleRequestInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="add-request">
        <h1 className="add-request__heading">Enter Request</h1>
        <form className="add-request-form">
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
            name="description"
            value={this.state.description}
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

export default AddRequest
