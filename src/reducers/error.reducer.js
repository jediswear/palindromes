import { SET_ERROR, REMOVE_ERROR } from '../actions/error.actions'

const initialState = {
  msg: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        msg: action.msg
      }
    case REMOVE_ERROR:
      return {
        ...state,
        msg: null
      }
    default:
      return state
  }
}

export default errorReducer
