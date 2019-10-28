const defaultState = {
  user: null,
  lessons: [],
  lessonToEdit: null,
  lessonToShow: null
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    case 'ADD_NEW_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'SET_LESSON_TO_SHOW':
      return {...state, lessonToShow: action.payload}
    case 'SET_LESSON_TO_EDIT':
      return {...state, lessonToEdit: action.payload}
    default:
      return state
  }
}
