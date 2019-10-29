import React from 'react'

class MyLessons extends Component {

  state = {
    mylessons: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/my_lessons', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(r => r.json())
    .then(console.log)
  }
  render() {
    return (
      <div>In MyLessons</div>
    )
  }
}

export default MyLessons
