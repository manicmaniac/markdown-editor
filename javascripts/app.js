import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <App defaultValueUrl='https://raw.githubusercontent.com/wiki/adam-p/markdown-here/Markdown-Cheatsheet.md' />,
  document.getElementById('app')
)
