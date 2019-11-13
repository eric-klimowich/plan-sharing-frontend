import React, { Fragment } from 'react'
import Comment from '../components/Comment'

const CommentsContainer = props => {
  return (
    <Fragment>
      {props.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
          />
        )
      })}
    </Fragment>
  )
}

export default CommentsContainer
