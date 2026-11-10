import Button from '../ui/Button';
import styles from './Navbar.module.css';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => setActivePage('home')}>
        Skill<span>Shift</span>
      </div>
      <nav className={styles.nav}>
        <button
          className={activePage === 'home' ? styles.active : ''}
          onClick={() => setActivePage('home')}
        >
          Головна
        </button>
        <button
          className={activePage === 'courses' ? styles.active : ''}
          onClick={() => setActivePage('courses')}
        >
          Курси
        </button>
        <button
          className={activePage === 'learn' ? styles.active : ''}
          onClick={() => setActivePage('learn')}
        >
          Навчання з AI
        </button>
      </nav>
      <Button variant="primary" onClick={() => setActivePage('auth')}>
        Увійти
      </Button>
    </header>
  );
}
