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
    fileData: '',
    fileName: ''
  }

  setLocalState = () => {
    this.setState({
      title: this.props.pickedLesson.title,
      description: this.props.pickedLesson.description,
      grade: this.props.pickedLesson.grade,
      subject: this.props.pickedLesson.subject,
      fileName: this.props.pickedLesson.file_name
    })
  }

  componentDidMount() {
    Adapter.getFileData(this.props.pickedLesson.id)
      .then(file => {
        this.setState({
          fileData: file.file
        })
      })
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

  handleShowFileInputField = () => {
    this.props.showReplaceFileField()
  }

  handleHideFileInputField = () => {
    this.props.hideReplaceFileField()
  }

  renderFileInputField = () => {
    if (this.props.replaceFile) {
      return (
        <Fragment>
          <input
            className="add-lesson-form__input"
            type="file"
            name="file"
            placeholder="add lesson plan file...."
            onChange={this.handleChangeLessonInput}
          />
          <button type="button" onClick={this.handleHideFileInputField}>Cancel</button>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <p>{this.props.pickedLesson.file_name}</p>
        <button type="button" onClick={this.handleShowFileInputField}>Replace Lesson Plan</button>
      </Fragment>
    )
  }

  handleEditLessonWithFile = (file, lesson, id) => {
    Adapter.patchLessonWithFile(file, lesson, id)
    this.props.history.push('/lessons')
    this.setState({
      title: '',
      description: '',
      grade: '',
      subject: '',
      file: '',
      fileName: ''
    })
  }

  handleEditLessonWithoutFile = (lesson, id) => {
    Adapter.patchLessonWithoutFile(lesson, id)
    this.props.history.push('/lessons')
    this.setState({
      title: '',
      description: '',
      grade: '',
      subject: '',
      file: '',
      fileName: ''
    })
  }

  convertFileToBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    })
  }

  convertAndPassFileToSubmit = () => {
    this.convertFileToBase64(this.state.file).then(data => this.handleEditLessonWithFile(data, this.state, this.props.pickedLesson.id))
  }

  handleEditLesson = event => {
    event.preventDefault()
    if (this.state.file) {
      this.setState({
        fileName: this.state.file.name
      }, () => this.convertAndPassFileToSubmit())
    } else {
      this.handleEditLessonWithoutFile(this.state, this.props.pickedLesson.id)
    }

  }

  render() {
    console.log(this.props.pickedLesson)
    console.log(this.state)
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
