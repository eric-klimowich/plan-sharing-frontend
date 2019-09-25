import React, { Component } from 'react'

class AddLesson extends Component {

  state = {
    title: '',
    content: ''
  }

  handleAddLesson = (event, lesson) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/lessons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        title: lesson.title,
        content: lesson.content
      })
    })
    .then(r => r.json())
    .then(console.log)
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
        <form className="add-lesson-form" onSubmit={(event) => this.handleAddLesson(event, this.state)}>
          <input
            className="add-lesson-form__input"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="enter title..."
            onChange={this.handleChangeLessonInput}
          />
          <input
            className="add-lesson-form__input"
            type="text"
            name="content"
            value={this.state.content}
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
