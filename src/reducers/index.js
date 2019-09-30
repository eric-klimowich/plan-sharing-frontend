const defaultState = {
  user: null
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    default:
      return state
  }
}
