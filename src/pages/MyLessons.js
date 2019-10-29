import React, { Component } from 'react'
import { connect } from 'react-redux'
import Adapter from '../Adapter'
import LessonsContainer from './LessonsContainer'
import { setMyLessons } from '../actions'

class MyLessons extends Component {

  componentDidMount() {
    Adapter.getMyLessons()
      .then(myLessons => this.props.setMyLessons(myLessons))
  }

  render() {
    return (
      <LessonsContainer lessons={this.props.myLessons} />
    )
  }
}

const mapStateToProps = state => {
  return {
    myLessons: state.myLessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMyLessons: (myLessons) => dispatch(setMyLessons(myLessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLessons)
