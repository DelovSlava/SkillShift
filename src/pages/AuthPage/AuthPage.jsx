import Button from '../../components/ui/Button';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>
          Вхід у <span>SkillShift</span>
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="student@university.edu" />
          </div>
          <div className={styles.field}>
            <label>Пароль</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <Button variant="primary">Увійти</Button>
        </form>
      </div>
    </div>
  );
}
