import { useState } from 'react';
import { useUserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm';

export default function Auth() {
  const { signUp } = useUserContext();
  const { formState, handleChange } = useForm({ email: '', password: ''});

  async function handleSignUp() {
    await signUp(formState.email, formState.password)
  }
  
  return (
    <>
    <form onSubmit={handleSignUp}>
      <input 
      onChange={handleChange}
      placeholder='Email'/>
      <input 
      onChange={handleChange}
      placeholder='Password'/>
      <button>Sign Up</button>
    </form>
    </>
  )
}

