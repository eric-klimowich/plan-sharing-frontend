const defaultState = {
  user: null,
  lessons: [],
  lessonIdToEdit: null
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    case 'ADD_NEW_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'SET_LESSON_ID_TO_EDIT':
      return {...state, lessonIdToEdit: action.payload}
    default:
      return state
  }
}
