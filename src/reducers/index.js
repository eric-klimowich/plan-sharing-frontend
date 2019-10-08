const defaultState = {
  user: null,
  jwt: ''
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_JWT':
      return {...state, jwt: action.payload}
    default:
      return state
  }
}
