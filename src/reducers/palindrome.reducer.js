import {SHOW_PALINDROMES} from '../actions/palindrome.action'

const initialState = {
  show: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PALINDROMES:
      return {
        ...state,
        show: true
      }
    default:
      return state
  }
}

export default reducer