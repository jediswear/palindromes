import React from 'react'
import {getSentences} from '../utils/transformStrings'
import Sentence from './Sentence'
import {connect} from 'react-redux'

const Results = ({ file, palindrome }) => {
  const res = file.content && palindrome.show
    ? getSentences(file.content).map((str, i) => <Sentence content={str} key={i}/>)
    : file.content

  // file.content && findAll(file.content)

  const isPalindromchik = (str) => {
    if(str.trim().length < 2) {
      return false
    }

    const formatted = str.toLowerCase().replace(/[^a-zA-Z]/g, '')
    const half = Math.floor(formatted.length / 2)
    const even = formatted.length % 2 === 0
    let toRight = even ? half + 1 : half

    for (let toLeft = half; toLeft >= 0; toLeft--, toRight++) {
      if (formatted[toLeft] !== formatted[toRight]) {
        return false
      }
    }

    return true
  }

  const nextChar = (text) => {
    for(let char of text){

      console.log('char: ',char)
    }
  }

  file.content && nextChar(file.content)

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