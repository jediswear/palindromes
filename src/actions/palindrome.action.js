export const SHOW_PALINDROMES = 'SHOW_PALINDROMES'
export const SET_PALINDROMES_LIST = 'SET_PALINDROMES_LIST'
export const CLEAR_PALINDROMES = 'CLEAR_PALINDROMES'

export const showPalindromes = () => ({
  type: SHOW_PALINDROMES
})

export const setPalindromes = (list) => ({
  type: SET_PALINDROMES_LIST,
  list
})

export const clearPalindromes = () => ({
  type: CLEAR_PALINDROMES
})
