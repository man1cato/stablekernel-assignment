
import React, { useState } from 'react'
import './LoginPage.scss'

const LoginPage = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      // const clientId = btoa(`com.stablekernel.interview`)
      // console.log(clientId)  
      const res = await fetch('https://wing-quest.herokuapp.com/auth/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic Y29tLnN0YWJsZWtlcm5lbC5pbnRlcnZpZXc6`,
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `grant_type=password&username=${username}&password=${password}`
      })
      const body = await res.json()
      console.log(body)
      const token = body.access_token
      if (token) {
        localStorage.setItem('token', token)
        console.log(props)
        props.history.go('/restaurants')
      }

    } catch (e) {
      console.log(e)
      alert('Login failed. Please try again.')
    }
  }

  return (
    <div className='login-container'>
      <img 
        className='login-img'
        src='/wingquest-bg.svg'
        alt='WingQuest'
      />

      <div className='login-box'>
        <h5 className='input-label'>Username</h5>
        <input
          className='input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h5 className='input-label'>Password</h5>
        <input
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
    </div>
  )
} 

export default LoginPage