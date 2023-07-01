import { closeSnackbar, enqueueSnackbar } from 'notistack'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { supabase } from '../../utils/supabase'
import ButtonComponent from './ButtonComponent'
import FormInput from './FormInput'




const SignInComponent = ({closeModal}) => {

  const action = snackBarId => (
    <button onClick={() => closeSnackbar(snackBarId)}>&#10005;</button>
  )

  const {total} = useSelector((state) => state.cart)

  const [signInData, setSIgnInData] = useState({
    email: '',
  })

  const [existingEmail, setExistingEmail] = useState('')

  const {email} = signInData

  const handleChange = (e) => {
    const {name, value} = e.target
    setSIgnInData({
      ...signInData,
      [name]: value
    })
  }

  const resetForm = () => {
    setSIgnInData({
      email: '',
    })
  }

 useEffect(() => {
   const play = async () => {
     const { data, error } = await supabase.auth.getUser()
     if (error) {
      setExistingEmail('')
     }

     setExistingEmail(data?.user?.email || '') 
    }
   play()
 },[])

  const handleSignInSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
      })

      enqueueSnackbar('check your email for magic link', {
        variant: 'info',
        action,
      })

      resetForm()
          
    } catch (error) {
      alert('There was an error verifying your email')
      alert(error)
    }
  }

  const handlePayment = () => {
    fetch('https://api.paystack.co/transaction/initialize', {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET_KEY}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: existingEmail, 
       amount: total * 100,
       channels: ["card", "bank", "qr", "ussd"],
       metadata: {
         "cancel_action": "https://shop-ee.netlify.app",
       }
     }),
    }).then((res) => res.json())
    .then(async (data) => {
      await supabase.auth.signOut()
      location.href = data.data.authorization_url;
    })
  }

  return (
    <div className='bg-text-primary px-5 py-6 flex flex-col -gap-2'>
      <div className='text-2xl font-bold mb-2 flex justify-end cursor-pointer hover:text-secondary-plum'
        onClick={() => {
          closeModal(false)
        }}
      >
        &#10005;
      </div>
      {!existingEmail && <h2>Please verify your email to complete payment</h2>}
      <form onSubmit={handleSignInSubmit}>
      {
        !existingEmail &&
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={existingEmail || email}
          readOnly={existingEmail && true}
          required
          onChange={handleChange}
        />
      }
      <div>
        {
          existingEmail ?
          <ButtonComponent type="button" onClick={handlePayment} buttonType={"contained"}>Pay with Paystack</ButtonComponent>
          : 
          <ButtonComponent buttonType={"contained"}>Verify Email</ButtonComponent>
        }
      </div>
      </form>
    </div>
  )
}

export default SignInComponent