import React, { Component } from 'react'

class AddLesson extends Component {

  state = {
    title: '',
    content: ''
  }

  handleChangeLessonInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="add-lesson">
        <h1 className="add-lesson__heading">Enter Lesson Info</h1>
        <form className="add-lesson-form">
          <input
            className="add-lesson-form__input"
            type="text"
            name="title"
            placeholder="enter title..."
            onChange={this.handleChangeLessonInput}
          />
          <input
            className="add-lesson-form__input"
            type="text"
            name="content"
            placeholder="enter content..."
            onChange={this.handleChangeLessonInput}
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
