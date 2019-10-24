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
