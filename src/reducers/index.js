const defaultState = {
  user: null,
  lessons: []
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    default:
      return state
  }
}
