import React, { Component } from 'react'
import Adapter from '../Adapter'

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
      <div>In AllLessons</div>
    )
  }
}

export default AllLessons
