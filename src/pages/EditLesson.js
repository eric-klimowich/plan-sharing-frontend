import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { renderLessonForm } from '../forms'
import { grades } from '../constants'
import { subjects } from '../constants'
import { showReplaceFileField } from '../actions'
import { hideReplaceFileField } from '../actions'
import { hideEditLessonForm } from '../actions'

class EditLesson extends Component {

  state = {
    title: '',
    description: '',
    grade: '',
    subject: '',
    file: '',
    fileName: ''
  }

  setLocalState = () => {
    this.setState({
      title: this.props.pickedLesson.title,
      description: this.props.pickedLesson.description,
      grade: this.props.pickedLesson.grade,
      subject: this.props.pickedLesson.subject
    })
  }

  componentDidMount() {
    this.setLocalState()
  }

  handleChangeLessonInput = event => {
    if (event.target.files) {
      this.setState({
        [event.target.name]: event.target.files[0]
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleEditLesson = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  handleCancelEditLesson = (event) => {
    this.props.hideEditLessonForm()
  }

  renderFileInputField = () => {
    if (this.props.replaceFile) {
      return (
        <input
          className="add-lesson-form__input"
          type="file"
          name="file"
          placeholder="add lesson plan file...."
          onChange={this.handleChangeLessonInput}
        />
      )
    }
    return (
      <p>{this.props.pickedLesson.file_name}</p>
    )
  }

  render() {
    console.log(this.props.pickedLesson)
    // console.log(this.state)
    if (!this.props.editingLesson) {
      return <Redirect to="/lessons" />
    }
    return (
      <Fragment>
        <div className="add-lesson">
          <h1 className="add-lesson__heading">Enter Lesson Info</h1>
          <form className="add-lesson-form" onSubmit={this.handleEditLesson}>
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
              name="description"
              value={this.state.description}
              placeholder="enter description..."
              onChange={this.handleChangeLessonInput}
            />
            <select
              className="add-lesson-form__input"
              name="grade"
              value={this.state.grade}
              onChange={this.handleChangeLessonInput}
            >
              <option>Grade</option>
                {grades.map(grade => {
                  return (
                    <option key={grade} value={grade} >{grade}</option>
                  )})
                }
            </select>
            <select
              className="add-lesson-form__input"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChangeLessonInput}
            >
              <option>Subject</option>
                {subjects.map(subject => {
                  return (
                    <option key={subject} value={subject} >{subject}</option>
                  )})
                }
            </select>
            {this.renderFileInputField()}
            <input
              type="submit"
              name="submit"
              value="Submit"
            />
          </form>
        </div>
        <button onClick={this.handleCancelEditLesson}>Cancel</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pickedLesson: state.pickedLesson,
    replaceFile: state.replaceFile,
    editingLesson: state.editingLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showReplaceFileField: () => dispatch(showReplaceFileField()),
    hideReplaceFileField: () => dispatch(hideReplaceFileField()),
    hideEditLessonForm: () => dispatch(hideEditLessonForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLesson)
