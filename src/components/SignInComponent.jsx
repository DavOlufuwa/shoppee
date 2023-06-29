import React from 'react'
import { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import FormInput from './FormInput'

const SignInComponent = () => {

  const [signInData, setSIgnInData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = signInData

  const handleChange = (e) => {
    const {name, value} = e.target
    setSIgnInData({
      ...signInData,
      [name]: value
    })
  }

  const handleSignInSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>SIGN IN</h2>
      <form onSubmit={handleSignInSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <div>
          <ButtonComponent buttonType={"contained"}>Sign In</ButtonComponent>
          <ButtonComponent buttonType={"outlined"}>Sign In with Google</ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default SignInComponent