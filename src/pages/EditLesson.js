import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import { renderLessonForm } from '../forms'
import { grades } from '../constants'
import { subjects } from '../constants'
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

  render() {
    console.log(this.props)
    console.log(this.state)
    if (!this.props.editingLesson) {
      return <Redirect to="/lessons" />
    }
    return (
      <Fragment>
      {renderLessonForm(this.handleEditLesson, this.state, this.handleChangeLessonInput, grades, subjects)}
      <button onClick={this.handleCancelEditLesson}>Cancel</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pickedLesson: state.pickedLesson,
    editingLesson: state.editingLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideEditLessonForm: () => dispatch(hideEditLessonForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLesson)
