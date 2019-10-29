export const setHistory = history => {
  return {
    type: 'SET_HISTORY',
    payload: history
  }
}

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

export const setMyLessons = myLessons => {
  return {
    type: 'SET_MY_LESSONS',
    payload: myLessons
  }
}

export const addNewLesson = lesson => {
  return {
    type: 'ADD_NEW_LESSON',
    payload: lesson
  }
}

export const deleteLesson = lesson => {
  return {
    type: 'DELETE_LESSON',
    payload: lesson
  }
}

export const setPickedLesson = lesson => {
  return {
    type: 'SET_PICKED_LESSON',
    payload: lesson
  }
}

export const showEditLessonForm = () => {
  return {
    type: 'SHOW_EDIT_LESSON_FORM'
  }
}

export const hideEditLessonForm = () => {
  return {
    type: 'HIDE_EDIT_LESSON_FORM'
  }
}
