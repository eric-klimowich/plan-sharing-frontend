import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { renderEditLessonForm } from '../forms'
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
    this.props.hideEditLessonForm()
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
    this.props.hideEditLessonForm()
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
      renderEditLessonForm(this.handleEditLesson, this.state, this.handleChangeLessonInput, grades, subjects, this.renderFileInputField, this.handleCancelEditLesson)
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
