import React, { Component } from 'react'
import Adapter from '../Adapter'

class MyLessons extends Component {

  state = {
    mylessons: []
  }

  componentDidMount() {
    Adapter.getMyLessons()
      .then(console.log)
  }

  render() {
    return (
      <div>In MyLessons</div>
    )
  }
}

export default MyLessons
