import React, { Component } from 'react'

class AddComment extends Component {

  state = {
    commentInput: ''
  }

  render() {
    console.log(this.state)
    return (
      <form>
        What did you think of this lesson? Leave a comment here:
        <textarea
          name="commentInput"
          value={this.state.commentInput}
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
