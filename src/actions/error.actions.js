export const SET_ERROR = 'SET_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export const setError = (msg) => ({
  type: SET_ERROR,
  msg
})

export const removeError = () => ({
  type: REMOVE_ERROR
})