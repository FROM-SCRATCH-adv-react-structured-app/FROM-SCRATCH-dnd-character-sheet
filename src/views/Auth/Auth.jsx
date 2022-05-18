import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm';

export default function Auth() {
  const [error, setError] = useState('');
  const { signUp } = useUserContext();
  const { formState, handleChange } = useForm({ email: '', password: ''});
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  async function handleSignUp(e) {
    try {
      e.preventDefault();
      await signUp(formState.email, formState.password);
      const url = location.search.from ? location.search.from.pathname : '/';
      
      history.replace(url)
    } catch (error) {
      setError(error);
    }
  }
  
  return (
    <>
    <form onSubmit={handleSignUp}>
      <input
      type="email"
      name="email"
      onChange={handleChange}
      placeholder='Email'/>
      <input
      type="password"
      name="password"
      onChange={handleChange}
      placeholder='Password'/>
      <button>Sign Up</button>
    </form>
    </>
  )
}

