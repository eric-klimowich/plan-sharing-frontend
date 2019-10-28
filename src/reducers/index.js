const defaultState = {
  history: null,
  user: null,
  lessons: [],
  pickedLesson: null
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_HISTORY':
      return {...state, history: action.payload}
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    case 'ADD_NEW_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'SET_PICKED_LESSON':
      return {...state, pickedLesson: action.payload}
    default:
      return state
  }
}
