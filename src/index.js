import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'


let isAuthenticated = false
const token = localStorage.getItem('token')

if (token) {
   isAuthenticated = true
}

ReactDOM.render(<App isAuthenticated={isAuthenticated} />, document.getElementById('root'))
