import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import './styles/reset.css'
import App from './components/App'
import {ThemeProvider} from 'styled-components'

const theme = {
  main: '#1d3f42',
  mainDark: '#10292b',
  mainAccent: '#ff4341',
  mainAccentLight: '#ff6c62',
  back: '#e5eeeb',
  borderRadius: '5px',
  borderColor: '#d3dcd9',
  white: '#ffffff'
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>, document.getElementById('root'))
