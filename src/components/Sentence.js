import React from 'react'
import {isPalindrome} from '../utils/isPalindrome'
import Word from './Word'
import {getWords} from '../utils/transformStrings'

const Sentence = ({ content }) => {
  const palindrome = isPalindrome(content)

  console.log(getWords(content))

  const words = getWords(content).map((word, i) => <Word content={word} key={i}/>)



  return (
    palindrome ?
    <span className={palindrome ? 'palindrome-str' : ''}>
      {
        words
      }
    </span> : words
  )
}

export default Sentence