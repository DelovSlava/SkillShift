import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('skillshift_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Сервер підтвердив авторизацію (HTTP Status 200)');
      }

      const userData = { email, name: email.split('@')[0] };
      localStorage.setItem('skillshift_user', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Помилка авторизації через API:', error);
      const userData = { email, name: email.split('@')[0] };
      localStorage.setItem('skillshift_user', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
  };

  const logout = () => {
    localStorage.removeItem('skillshift_user');
    setUser(null);
  };

  return { user, login, logout };
}
