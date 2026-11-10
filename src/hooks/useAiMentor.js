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

    // Імітація обробки запиту сервером AI
    setTimeout(() => {
      const aiReply = {
        id: Date.now() + 1,
        sender: 'ai',
        text: `Чудове запитання стосовно "${text}"! У React це реалізується через стан та користувацькі хуки.`,
      };
      setMessages((prev) => [...prev, aiReply]);
      setIsThinking(false);
    }, 800);
  };

  return { messages, sendMessage, isThinking };
}
