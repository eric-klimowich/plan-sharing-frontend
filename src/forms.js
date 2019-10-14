import React from 'react'

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
