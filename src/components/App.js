import React from 'react'
import Results from './DisplayResults'
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  font-family: Roboto;
  font-size: 16px;
`

const App = () => {
  return (
    <Wrapper>
      <Header/>
      <Results/>
    </Wrapper>
  )
}

export default App
