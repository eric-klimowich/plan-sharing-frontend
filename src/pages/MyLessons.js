import React, { Component } from 'react'
import Adapter from '../Adapter'

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
      <div>In MyLessons</div>
    )
  }
}

export default MyLessons
