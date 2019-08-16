import { CLEAR_FILE, SET_FILE_CONTENT, SET_FILE_INFO } from '../actions/file.action'

const initialState = {
  content: null,
  name: null
}

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILE_CONTENT:
      return {
        ...state,
        content: action.content
      }
    case SET_FILE_INFO:
      return {
        ...state,
        name: action.name
      }
    case CLEAR_FILE:
      return {
        ...state,
        content: null,
        name: null
      }
    default:
      return state
  }
}

export default fileReducer