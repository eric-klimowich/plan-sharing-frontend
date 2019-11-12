import React from 'react'

const AddRequest = () => {
  return (
    <div className="add-request">
      <h1 className="add-request__heading">Enter Request</h1>
      <form className="add-request-form">
        <input
          className="add-request-form__input"
          type="text"
          name="title"
          placeholder="enter title..."
        />
        <input
          className="add-request-form__input"
          type="text"
          name="description"
          placeholder="enter description..."
        />
        <input
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}

export default AddRequest
