import React from 'react'
import {mergePalindromesToText} from '../utils/getPalindromes'
import {connect} from 'react-redux'

const DisplayContent = ({ content, list }) => {

  return mergePalindromesToText(content, list).map((el, i) => {
    if (el.palindrome)
      return (
        <span className={'palindrome-str'} key={i}>
          {el.palindrome}
        </span>
      )

    return el
  })
}

const mapStateToProps = ({ file, palindrome }) => ({
  content: file.content,
  list: palindrome.list
})

export default connect(mapStateToProps)(DisplayContent)