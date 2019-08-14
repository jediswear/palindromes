import React from 'react'
import Sentence from './Sentence'
import { connect } from 'react-redux'
import { getPalindromes } from '../utils/isPalindrome'

const Results = ({ file, palindrome }) => {
  let text = file.content

  const res = text && <Sentence content={text} palindromes={getPalindromes(text)}/>

  return (
    <div className="results">
      <div className="results__full-text">{res}</div>
      <div className="results__longest">longest</div>
    </div>
  )
}

const mapStateToProps = ({ file, palindrome }) => ({
  file,
  palindrome
})

export default connect(mapStateToProps)(Results)