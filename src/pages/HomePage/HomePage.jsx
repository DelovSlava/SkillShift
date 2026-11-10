import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import styles from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>
          Системне вивчення ІТ. <span>Без води та обіцянок</span>
        </h1>
        <p>Практичні IT-курси, інтерактивний редактор коду та 24/7 AI-ментор</p>
        <div className={styles.heroButtons}>
          <Button variant="primary" onClick={() => navigate('/courses')}>
            Обрати курс
          </Button>
          <Button variant="outline" onClick={() => navigate('/learn')}>
            Спробувати AI-ментора
          </Button>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h3>94.5%</h3>
          <p>Успішних здач лабораторних</p>
        </div>
        <div className={styles.statCard}>
          <h3>24/7</h3>
          <p>Миттєва перевірка коду AI</p>
        </div>
        <div className={styles.statCard}>
          <h3>120+</h3>
          <p>Практичних задач</p>
        </div>
      </section>
    </div>
  );
}
