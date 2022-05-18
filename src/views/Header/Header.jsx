import style from './Header.css';
import { useUserContext } from '../../context/UserContext';

export default function Header() {
  const { logout } = useUserContext();

  function handleLogout(e) {
    e.preventDefault();

    logout();
  }

  return (
    <section className={style.header}>
      <button onClick={handleLogout} style={style.logout}>
        Logout
      </button>
    </section>
  );
}
