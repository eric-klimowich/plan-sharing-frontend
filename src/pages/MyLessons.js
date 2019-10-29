import React, { Component } from 'react'
import Adapter from '../Adapter'
import LessonsContainer from './LessonsContainer'

class MyLessons extends Component {

  state = {
    myLessons: []
  }

  componentDidMount() {
    Adapter.getMyLessons()
      .then(myLessons => {
        this.setState({ myLessons })
      })
  }

  render() {
    console.log(this.state)
    return (
      <LessonsContainer lessons={this.state.myLessons} />
    )
  }
}

export default MyLessons
