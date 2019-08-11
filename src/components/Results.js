import React from 'react'
import {getSentences} from '../utils/transformStrings'
import Sentence from './Sentence'
import {connect} from 'react-redux'

const Results = ({ file, palindrome }) => {
  const res = file.content && palindrome.show
    ? getSentences(file.content).map((str, i) => <Sentence content={str} key={i}/>)
    : file.content

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