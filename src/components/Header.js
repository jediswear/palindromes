import React, {Fragment} from 'react'
import ImportFile from './ImportFile'
import {connect} from 'react-redux'
import {showPalindromes} from '../actions/palindrome.action'

const Header = ({ file, showPalindromes }) => {
  const searchHandler = () => showPalindromes()

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
  showPalindromes
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)