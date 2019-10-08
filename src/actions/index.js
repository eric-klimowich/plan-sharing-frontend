export const setUser = user => {
  return {
    type: 'SET_USER',
    payload: user
  }
}

export const setJwt = jwt => {
  return {
    type: 'SET_JWT',
    payload: jwt
  }
}
