import React, { Fragment } from 'react'

export const renderLoginForm = (handleLoginUser, state, handleChangeUserInput) => {
  return (
    <div className="login">
      <h1 className="login__heading">Login</h1>
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
      <h1 className="new-user__heading">Sign up</h1>
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
          value={state.country}
          placeholder="enter country..."
          onChange={handleChangeUserInput}
        />
        <input
          className="new-user__form-input"
          type="text"
          name="avatar"
          value={state.state}
          placeholder="enter state..."
          onChange={handleChangeUserInput}
        />
        <input
          className="new-user__form-input"
          type="text"
          name="avatar"
          value={state.city}
          placeholder="enter city..."
          onChange={handleChangeUserInput}
        />
        <input
          className="new-user__form-input"
          type="text"
          name="avatar"
          value={state.school}
          placeholder="enter school..."
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
      <form className="add-lesson-form" onSubmit={handleAddLesson}>
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
          name="description"
          value={state.description}
          placeholder="enter description..."
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
          className="add-lesson-form__input"
          type="file"
          name="file"
          placeholder="add lesson plan file...."
          onChange={handleChangeLessonInput}
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

export const renderEditLessonForm = (handleEditLesson, state, handleChangeLessonInput, grades, subjects, renderFileInputField, handleCancelEditLesson) => {
  return (
    <Fragment>
      <div className="add-lesson">
        <h1 className="add-lesson__heading">Enter Lesson Info</h1>
        <form className="add-lesson-form" onSubmit={handleEditLesson}>
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
            name="description"
            value={state.description}
            placeholder="enter description..."
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
          {renderFileInputField()}
          <input
            type="submit"
            name="submit"
            value="Submit"
          />
        </form>
      </div>
      <button onClick={handleCancelEditLesson}>Cancel</button>
    </Fragment>
  )
}

export const renderAddCommentForm = (handleSubmitComment, state, handleCommentInputChange) => {
  return (
    <form onSubmit={handleSubmitComment}>
      What did you think of this lesson? Leave a comment here:
      <textarea
        name="commentInput"
        value={state.commentInput}
        onChange={handleCommentInputChange}
      />
      <input
        type="submit"
        name="submit"
        value="Submit"
      />
    </form>
  )
}

export const renderAddRequestForm = (handleSubmitRequest, handleRequestInputChange, state) => {
  return (
    <div className="add-request">
      <h1 className="add-request__heading">Enter Request</h1>
      <form className="add-request-form" onSubmit={handleSubmitRequest}>
        <input
          className="add-request-form__input"
          type="text"
          name="title"
          value={state.title}
          placeholder="enter title..."
          onChange={handleRequestInputChange}
        />
        <textarea
          className="add-request-form__input"
          type="text"
          name="content"
          value={state.content}
          placeholder="enter description..."
          onChange={handleRequestInputChange}
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
