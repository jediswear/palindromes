import {createStore, combineReducers} from 'redux'
import fileReducer from './reducers/file.reducer'
import palindromeReducer from './reducers/palindrome.reducer'
import errorReducer from './reducers/error.reducer'

const rootReducer = combineReducers({
  file: fileReducer,
  palindrome: palindromeReducer,
  error: errorReducer
})

const store = createStore(rootReducer)

export default store