import React from 'react'
import {isPalindrome} from '../utils/isPalindrome'

const Word = ({ content }) => {
  const isPal = isPalindrome(content)

  return (
    isPal ? <span className={'palindrome-str-word'}>{content}</span> : `${content}`
  )
}

export default Word