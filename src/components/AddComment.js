import React, { Component } from 'react'

class AddComment extends Component {
  render() {
    return (
      <form>
        What did you think of this lesson? Leave a comment here:
        <textarea
          name="commentInput"
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
