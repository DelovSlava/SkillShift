import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/ui/Button';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      window.location.href = '/courses';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>
          Вхід у <span>SkillShift</span>
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@university.edu"
            />
          </div>
          <div className={styles.field}>
            <label>Пароль</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <Button variant="primary">Увійти</Button>
        </form>
      </div>
    </div>
  );
}
