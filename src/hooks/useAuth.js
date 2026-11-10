import { useState } from 'react';

export function useAuth() {
  // Зчитуємо дані з localStorage одразу при створенні стану
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('skillshift_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email, password) => {
    if (email && password) {
      const userData = { email, name: email.split('@')[0] };
      localStorage.setItem('skillshift_user', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('skillshift_user');
    setUser(null);
  };

  return { user, login, logout };
}
