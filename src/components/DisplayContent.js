import React from 'react'
import {mergePalindromesToText} from '../utils/getPalindromes'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Highlighted = styled.span`
  background: rgba(255, 255, 0, 0.31);
  transition: .3s;

  &:hover {
    background: rgba(255, 0, 0, 0.6);
  }

`

const DisplayContent = ({ content, list }) => {

  return mergePalindromesToText(content, list).map((el, i) => {
    if (el.palindrome)
      return (
        <Highlighted key={i}>
          {el.palindrome}
        </Highlighted>
      )

    return el
  })
}

const mapStateToProps = ({ file, palindrome }) => ({
  content: file.content,
  list: palindrome.list
})

export default connect(mapStateToProps)(DisplayContent)