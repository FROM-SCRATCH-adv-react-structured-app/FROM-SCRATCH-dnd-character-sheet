import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import style from './Auth.css';

export default function Auth() {
  const [error, setError] = useState('');
  const { login, signUp, signInOrUp, setSignInOrUp } = useUserContext();
  const { formState, handleChange } = useForm({ email: '', password: '' });
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  async function handleSignUp(e) {
    try {
      e.preventDefault();
      await signUp(formState.email, formState.password);
      const url = location.search.from ? location.search.from.pathname : '/';

      history.replace(url);
    } catch (error) {
      setError(error);
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    await login(formState.email, formState.password);
    const url = location.search.from ? location.search.from.pathname : '/';
    history.replace(url);
  }

  function userStatus() {
    signInOrUp ? setSignInOrUp(false) : setSignInOrUp(true);
  }

  return (
    <section className={style.loginSection}>
      {signInOrUp ? (
        <>
          <h1>Sign Up for an Account</h1>
          <p>
            or{' '}
            <span className={style.pointer} onClick={userStatus}>
              sign into your account
            </span>
          </p>
          <form className={style.loginForm} onSubmit={handleSignUp}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <button className={style.loginButton}>Sign Up</button>
          </form>
        </>
      ) : (
        <>
          <h1>Sign In to your Account</h1>
          <p>
            or{' '}
            <span className={style.pointer} onClick={userStatus}>
              sign up for an account
            </span>
          </p>
          <form className={style.loginForm} onSubmit={handleSignIn}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <button className={style.loginButton}>Sign In</button>
          </form>
        </>
      )}
    </section>
  );
}
