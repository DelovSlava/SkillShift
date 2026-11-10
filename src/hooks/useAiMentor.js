import { useState } from 'react';

export function useAiMentor() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Привіт! Я твій AI-ментор. Є запитання по уроку?',
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setIsThinking(true);

    try {
      // Відправляємо запит до Mock API сервісу
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: text }),
        }
      );

      await response.json();

      const aiReply = {
        id: Date.now() + 1,
        sender: 'ai',
        text: `Отримано відповідь з API на запит "${text}": У React це реалізується через стан та користувацькі хуки.`,
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (error) {
      console.error('Помилка API AI-ментора:', error);
    } finally {
      setIsThinking(false);
    }
  };

  return { messages, sendMessage, isThinking };
}
