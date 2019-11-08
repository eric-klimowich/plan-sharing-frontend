import React, { Component } from 'react'
import Adapter from '../Adapter'

class AddComment extends Component {

  state = {
    commentInput: ''
  }

  handleCommentInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitComment = event => {
    event.preventDefault()
    Adapter.addComment()
      .then(console.log)
    this.setState({
      commentInput: ''
    })
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmitComment}>
        What did you think of this lesson? Leave a comment here:
        <textarea
          name="commentInput"
          value={this.state.commentInput}
          onChange={this.handleCommentInputChange}
        />
        <input
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    )
  }
}

export default AddComment
