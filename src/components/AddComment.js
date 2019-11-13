import React, { Component } from 'react'
import Adapter from '../Adapter'
import { renderAddCommentForm } from '../forms'

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
    Adapter.postComment(this.state.commentInput, this.props.userId, this.props.lessonId)
      .then(console.log)
    this.setState({
      commentInput: ''
    })
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      renderAddCommentForm(this.handleSubmitComment, this.state, this.handleCommentInputChange)
    )
  }
}

export default AddComment
