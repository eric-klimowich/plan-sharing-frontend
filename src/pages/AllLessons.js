import React, { Component } from 'react'
import Adapter from '../Adapter'
import LessonsContainer from './LessonsContainer'

class AllLessons extends Component {

  state = {
    lessons: []
  }

  componentDidMount() {
    Adapter.getLessons()
      .then(lessons => {
        this.setState({ lessons })
      })
  }

  render() {
    console.log(this.state)
    return (
      <LessonsContainer lessons={this.state.lessons} />
    )
  }
}

export default AllLessons
