import React, { Fragment } from 'react'
import ImportFile from './ImportFile'
import { connect } from 'react-redux'
import { clearFile } from '../actions/file.action'
import { showPalindromes, setPalindromes, clearPalindromes } from '../actions/palindrome.action'
import { getPalindromes } from '../utils/getPalindromes'
import { removeError } from '../actions/error.actions'
import styled from 'styled-components'
import Button from '../styles/Button'
import Icon from './MaterialIcon'

const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
  background: linear-gradient(to right, #1d3f42 10%, #601e22 100%);
`
const LogoWrapper = styled.div`
  margin-right: auto;
`
const Logo = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  color: ${props => props.theme.white};
  transition: .3s;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.mainAccent};
  }
`
const LogoSub = styled.span`
  color: ${props => props.theme.white};
  font-size: 12px;
`
const NavSub = styled.div`
  display: flex;
  align-items: center;
  min-height: 30px;
  padding: 5px 15px;
  font-size: 12px;
  color: ${props => props.theme.white};
  background: ${props => props.theme.mainDark};
`
const Message = styled.span`
  color: ${props => props.error ? props.theme.mainAccent : props.theme.white};
`
const RemoveBtn = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.mainAccent};

  &:hover {
    color: ${props => props.theme.mainAccentLight};
  }
`

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

  if (error.msg) {
    message = error.msg
  } else if (file.name) {
    message = file.name
  } else {
    message = 'Hello! Import *.txt or *.rtf file and press Search button'
  }

  return (
    <Fragment>
      <Nav>
        <LogoWrapper>
          <Logo>Plndrm</Logo>
          <LogoSub>Gotta find 'em all</LogoSub>
        </LogoWrapper>
        <ImportFile/>
        <Button
          style={{ marginLeft: '10px' }}
          hidden={!file.content}
          onClick={searchHandler}>
          search
          <Icon>search</Icon>
        </Button>
      </Nav>
      <NavSub>
        <Message error={error.msg}>{message}</Message>
        {
          file.content
            ? <RemoveBtn onClick={clearHandler}>
              <Icon>remove_circle</Icon>
            </RemoveBtn>
            : null
        }
      </NavSub>
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
