import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { supabase } from '../../utils/supabase'
import ButtonComponent from './ButtonComponent'
import FormInput from './FormInput'



const SignUpComponent = () => {

  const dispatch = useDispatch()

  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const {fullName, email, password, confirmPassword} = signUpData

  const handleChange = (e) => {
    const {name, value} = e.target
    setSignUpData({
      ...signUpData,
      [name]: value
    })
  }

  const resetForm = () => {
    setSignUpData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      retu
    }

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
          options: {
            data: {
              full_name: fullName,
            }
          }
        }
      ) 

      alert("Check your Email For a verification link")
            
      console.log(data)

    } catch (error) {
      alert(error)
    }

    resetForm();
  }

  return (
    <div>
      <h2>SIGN UP</h2>
      <form onSubmit={handleSignUpSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          name="fullName"
          value={fullName}
          required
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <div>
          <ButtonComponent buttonType={"contained"}>Sign Up</ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default SignUpComponent