import React, { Fragment } from 'react'
import ImportFile from './ImportFile'
import { connect } from 'react-redux'
import { clearFile } from '../actions/file.action'
import { showPalindromes, setPalindromes, clearPalindromes } from '../actions/palindrome.action'
import { getPalindromes } from '../utils/getPalindromes'
import { removeError } from '../actions/error.actions'

const Header = ({ file, showPalindromes, setPalindromes, clearPalindromes, clearFile, error, removeError }) => {
  const searchHandler = () => {
    const palindromes = getPalindromes(file.content)
    setPalindromes(palindromes)
    showPalindromes()
  }

  const clearHandler = () => {
    clearPalindromes()
    clearFile()
    removeError()
  }

  let message = null

  if (error.msg)
    message = error.msg
  else if (file.name)
    message = file.name
  else
    message = 'Hello! Import *.txt or *.rtf file and press Search button'

  return (
    <Fragment>
      <div className="nav">
        <div className="nav-logo">
          <span className='nav-logo__logo'>Plndrm</span>
          <span className="nav-logo__sub">Gotta find 'em all</span>
        </div>
        <ImportFile/>
        <button
          className={`btn nav__search ${file.content ? '' : 'disabled'}`}
          onClick={searchHandler}>
          search
          <i className="material-icons">search</i>
        </button>
      </div>
      <div className="nav-sub">
        <span className={error.msg ? 'nav-sub__error' : ''}>{message}</span>
        {
          file.content
            ? <button className='nav-sub__remove' onClick={clearHandler}>
              <i className="material-icons">remove_circle</i>
            </button>
            : null
        }

      </div>
    </Fragment>
  )
}


const mapStateToProps = ({ file, error }) => ({
  file,
  error
})

const mapDispatchToProps = {
  showPalindromes,
  setPalindromes,
  clearPalindromes,
  clearFile,
  removeError
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)