import {CLEAR_PALINDROMES, SET_PALINDROMES_LIST, SHOW_PALINDROMES} from '../actions/palindrome.action'

const initialState = {
  show: false,
  list: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PALINDROMES:
      return {
        ...state,
        show: true
      }
    case SET_PALINDROMES_LIST:
      const list = action.list.sort((a, b) => b.palindrome.length - a.palindrome.length)

      return {
        ...state,
        list
      }
    case CLEAR_PALINDROMES:
      return {
        ...state,
        list: null
      }
    default:
      return state
  }
}

export default reducer