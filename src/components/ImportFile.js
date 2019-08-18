import React from 'react'
import {connect} from 'react-redux'
import {setFileContent, setFileInfo, clearFile} from '../actions/file.action'
import {clearPalindromes} from '../actions/palindrome.action'
import {setError, removeError} from '../actions/error.actions'
import Button from '../styles/Button'
import styled from 'styled-components'
import Icon from './MaterialIcon'

const ImportButton = styled(Button)`
  position: relative;
`
const Input = styled.input`
  position: absolute;
  visibility: hidden;
  width: 0;
`

const ImportFile = ({ setFileContent, setFileInfo, clearPalindromes, clearFile, setError, removeError }) => {
  const importHandler = e => {
    resetApp()

    const formats = [/\.txt$/, /\.rtf$/]
    const file = e.target.files[0]

    if (!file)
      return

    const validType = formats.some(format => format.test(file.name))

    if (!validType) {
      setError('Incorrect file type: Please import *.txt or *.rtf')
      return
    }

    const reader = new FileReader()

    reader.readAsText(file)
    reader.onload = function () {
      setFileContent(this.result)
    }

    setFileInfo(file.name)
  }

  const resetApp = () => {
    clearPalindromes()
    clearFile()
    removeError()
  }

  return (
    <ImportButton as='label' className='btn nav-import'>
      <Input
        type='file'
        accept=".txt,.rtf"
        onClick={e => e.target.value = null}
        onChange={importHandler}/>
      import
      <Icon>publish</Icon>
    </ImportButton>
  )
}

const mapDispatchToProps = {
  setFileContent,
  setFileInfo,
  clearPalindromes,
  clearFile,
  setError,
  removeError
}

export default connect(null, mapDispatchToProps)(ImportFile)