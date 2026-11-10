import { useState } from 'react';
import { useAiMentor } from '../../hooks/useAiMentor';
import Button from '../../components/ui/Button';
import styles from './LearnPage.module.css';

export default function LearnPage() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, isThinking } = useAiMentor();

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

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
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.msg} ${msg.sender === 'ai' ? styles.ai : styles.user}`}
            >
              {msg.text}
            </div>
          ))}
          {isThinking && (
            <div
              className={`${styles.msg} ${styles.ai}`}
              style={{ opacity: 0.7 }}
            >
              <i>AI друкує відповідь...</i>
            </div>
          )}
        </div>
        <div className={styles.chatInputGroup}>
          <input
            type="text"
            placeholder="Запитати у AI..."
            className={styles.chatInput}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="primary" onClick={handleSend}>
            Надіслати
          </Button>
        </div>
      </section>
    </div>
  );
}
