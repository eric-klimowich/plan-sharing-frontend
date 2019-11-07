import React, { Component } from 'react'

class AddComment extends Component {

  state = {
    commentInput: ''
  }

  handleCommentInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCommentSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        content: this.state.commentInput,
        user_id: "",
        lesson_id: ""
      })
    })
      .then(r => r.json())
      .then(console.log)
    this.setState({
      commentInput: ''
    })
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <form>
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
