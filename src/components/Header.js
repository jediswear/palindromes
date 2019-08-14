import React, {Fragment} from 'react'
import ImportFile from './ImportFile'
import {connect} from 'react-redux'
import {showPalindromes, setPalindromes} from '../actions/palindrome.action'
import {getPalindromes} from '../utils/getPalindromes'

const Header = ({ file, showPalindromes, setPalindromes }) => {
  const searchHandler = () => {
    const palindromes = getPalindromes(file.content)
    setPalindromes(palindromes)
    showPalindromes()
  }

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
        File: {file.name ? file.name : 'import .txt file'}
      </div>
    </Fragment>
  )
}


const mapStateToProps = ({ file }) => ({
  file
})

const mapDispatchToProps = {
  showPalindromes,
  setPalindromes
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)