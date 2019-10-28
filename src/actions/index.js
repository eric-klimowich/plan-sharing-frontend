export const setUser = user => {
  return {
    type: 'SET_USER',
    payload: user
  }
}

export const setLessons = lessons => {
  return {
    type: 'SET_LESSONS',
    payload: lessons
  }
}

export const addNewLesson = lesson => {
  return {
    type: 'ADD_NEW_LESSON',
    payload: lesson
  }
}

export const setLessonToEdit = lesson => {
  return {
    type: 'SET_LESSON_TO_EDIT',
    payload: lesson
  }
}
