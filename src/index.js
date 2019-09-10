import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'


let isAuthenticated = false
const token = localStorage.getItem('token')

if (token) {
   isAuthenticated = true
}

ReactDOM.render(<App isAuthenticated={isAuthenticated} />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
