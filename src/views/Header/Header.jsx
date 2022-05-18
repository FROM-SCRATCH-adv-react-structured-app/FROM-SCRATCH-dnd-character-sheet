import style from './Header.css';
import { useUserContext } from '../../context/UserContext';

export default function Header() {
  const { user, logout } = useUserContext();

  function handleLogout(e) {
    e.preventDefault();

    logout();
  }

  return (
    <section className={style.header}>
      {user.email
      ? <button onClick={handleLogout} className={style.logoutButton}>  Logout
      </button>
      : '' }
      
    </section>
  );
}
