import React from 'react'

export const renderLoginForm = (handleLoginUser, state, handleChangeUserInput) => {
  return (
    <div className="login">
      <h1 className="login__heading">Please enter to login</h1>
      <form className="login-form" onSubmit={(event) => handleLoginUser(event, state)}>
        <input
          className="login-form__input"
          type="text"
          name="username"
          value={state.username}
          placeholder="enter username..."
          onChange={handleChangeUserInput}
        />
        <input
          className="login-form__input"
          type="text"
          name="password"
          value={state.password}
          placeholder="enter password..."
          onChange={handleChangeUserInput}
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

export const renderNewUserForm = (handleSubmitNewUser, state, handleChangeUserInput) => {
  return (
    <div className="new-user">
      <h1 className="new-user__heading">Please enter to sign up</h1>
      <form className="new-user__form" onSubmit={(event) => handleSubmitNewUser(event, state)}>
        <input
          className="new-user__form-input"
          type="text"
          name="username"
          value={state.username}
          placeholder="enter username..."
          onChange={handleChangeUserInput}
        />
        <input
          className="new-user__form-input"
          type="text"
          name="password"
          value={state.password}
          placeholder="enter password..."
          onChange={handleChangeUserInput}
        />
        <textarea
          className="new-user__form-input"
          name="bio"
          value={state.bio}
          placeholder="enter bio..."
          onChange={handleChangeUserInput}
        />
        <input
          className="new-user__form-input"
          type="text"
          name="avatar"
          value={state.avatar}
          placeholder="enter avatar..."
          onChange={handleChangeUserInput}
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

export const renderAddLessonForm = (handleAddLesson, state, handleChangeLessonInput, grades, subjects) => {
  return (
    <div className="add-lesson">
      <h1 className="add-lesson__heading">Enter Lesson Info</h1>
      <form className="add-lesson-form" onSubmit={(event) => handleAddLesson(event, state)}>
        <input
          className="add-lesson-form__input"
          type="text"
          name="title"
          value={state.title}
          placeholder="enter title..."
          onChange={handleChangeLessonInput}
        />
        <input
          className="add-lesson-form__input"
          type="text"
          name="content"
          value={state.content}
          placeholder="enter content..."
          onChange={handleChangeLessonInput}
        />
        <select
          className="add-lesson-form__input"
          name="grade"
          value={state.grade}
          onChange={handleChangeLessonInput}
        >
          <option>Grade</option>
            {grades.map(grade => {
              return (
                <option key={grade} value={grade} >{grade}</option>
              )})
            }
        </select>
        <select
          className="add-lesson-form__input"
          name="subject"
          value={state.subject}
          onChange={handleChangeLessonInput}
        >
          <option>Subject</option>
            {subjects.map(subject => {
              return (
                <option key={subject} value={subject} >{subject}</option>
              )})
            }
        </select>
        <input
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}