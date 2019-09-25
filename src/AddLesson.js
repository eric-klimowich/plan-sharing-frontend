import React, { Component } from 'react'

class AddLesson extends Component {
  render() {
    return (
      <div className="add-lesson">
        <h1 className="add-lesson__heading">Enter Lesson Info</h1>
        <form className="add-lesson-form">
          <input
            className="add-lesson-form__input"
            type="text"
            name="title"
            placeholder="enter title..."
          />
          <input
            className="add-lesson-form__input"
            type="text"
            name="content"
            placeholder="enter content..."
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

export default AddLesson
