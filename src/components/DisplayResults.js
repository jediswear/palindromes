import React from 'react'
import DisplayContent from './DisplayContent'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Results = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 500px;
  box-sizing: border-box;
  padding: 20px 15px;
  border: 1px solid ${props => props.theme.borderColor};
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  font-size: 14px;
  background: ${props => props.theme.back};
`
const ResultsCaption = styled.span`
  margin-bottom: 5px;
`
const Text = styled.div`
  flex-grow: 1;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid ${props => props.theme.borderColor};
  line-height: 20px;
  overflow-x: auto;
  border-radius: ${props => props.theme.borderRadius};
`
const Longest = styled.div`
  min-width: 150px;
  padding: 15px;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
`

const DisplayResults = ({ file, palindrome: { show, list } }) => {

  const longest = list.length > 0 && list[0].palindrome

  return (
    <Results>
      <ResultsCaption>Content:</ResultsCaption>
      <Text>{show && list.length > 0 ? <DisplayContent/> : file.content}</Text>
      <ResultsCaption>Longest palindrome:</ResultsCaption>
      <Longest>{show ? longest : null}</Longest>
    </Results>
  )
}

const mapStateToProps = ({ file, palindrome }) => ({
  file,
  palindrome
})

export default connect(mapStateToProps)(DisplayResults)
