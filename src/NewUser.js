import React from 'react'

const NewUser = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="enter username..."
        />
        <input
          type="text"
          name="password"
          placeholder="enter password..."
        />
        <textarea
          name="bio"
          placeholder="enter bio..."
        />
        <input
          type="text"
          name="avatar"
          placeholder="enter avatar..."
        />
      </form>
    </div>
  )
}

export default NewUser
