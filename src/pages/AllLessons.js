import React, { Component } from 'react'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import LessonsContainer from '../containers/LessonsContainer'
import { setLessons } from '../actions'

class AllLessons extends Component {

  componentDidMount() {
    Adapter.getLessons()
      .then(lessons => this.props.setLessons(lessons))
  }

  render() {
    return (
      <LessonsContainer lessons={this.props.lessons} />
    )
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllLessons)
