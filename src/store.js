import {createStore, combineReducers} from 'redux'
import fileReducer from './reducers/file.reducer'
import palindromeReducer from './reducers/palindrome.reducer'

const rootReducer = combineReducers({
  file: fileReducer,
  palindrome: palindromeReducer
})

const store = createStore(rootReducer)

export default store