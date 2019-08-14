import React from 'react'
import DisplayContent from './DisplayContent'
import { connect } from 'react-redux'

const Results = ({ file, palindrome: {show, list} }) => {
  return (
    <div className="results">
      <div className="results__full-text">{show && list ? <DisplayContent/> : file.content}</div>
      <div className="results__longest">{show && list ? list[0].palindrome : null}</div>
    </div>
  )
}

const mapStateToProps = ({ file, palindrome }) => ({
  file,
  palindrome
})

export default connect(mapStateToProps)(Results)