import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        Skill<span>Shift</span>
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Головна
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Курси
        </NavLink>
        <NavLink
          to="/learn"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Навчання з AI
        </NavLink>
      </nav>
      <Button variant="primary" onClick={() => navigate('/auth')}>
        Увійти
      </Button>
    </header>
  );
}
