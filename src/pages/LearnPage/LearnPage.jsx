import Button from '../../components/ui/Button';
import styles from './LearnPage.module.css';

export default function LearnPage() {
  return (
    <div className={styles.workspace}>
      <aside className={styles.sidebar}>
        <h4>Модулі курсу</h4>
        <ul>
          <li className={styles.activeModule}>1. Вступ до React & Vite</li>
          <li>2. Створення UI компонентів</li>
          <li>3. Стилізація через CSS Modules</li>
          <li>4. Робота зі станом useState</li>
        </ul>
      </aside>

      <main className={styles.editorArea}>
        <div className={styles.theory}>
          <h3>Урок 1.3: Стилізація через CSS Modules</h3>
          <p>
            CSS Modules дозволяють створювати ізольовані стилі для кожного
            компонента без ризику конфлікту класів.
          </p>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>App.jsx</div>
          <pre className={styles.code}>
            {`import styles from './App.module.css';

export default function App() {
  return <h1 className={styles.title}>Hello World</h1>;
}`}
          </pre>
        </div>
      </main>

      <section className={styles.aiChat}>
        <h4>AI Mentor Chat</h4>
        <div className={styles.chatBox}>
          <div className={`${styles.msg} ${styles.ai}`}>
            Привіт! Я твій AI-ментор. Є запитання по CSS Modules?
          </div>
          <div className={`${styles.msg} ${styles.user}`}>
            Як імпортувати стилі в компонент?
          </div>
        </div>
        <div className={styles.chatInputGroup}>
          <input
            type="text"
            placeholder="Запитати у AI..."
            className={styles.chatInput}
          />
          <Button variant="primary">Надіслати</Button>
        </div>
      </section>
    </div>
  );
}
