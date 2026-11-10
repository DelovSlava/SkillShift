import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import LearnPage from './pages/LearnPage/LearnPage';
import AuthPage from './pages/AuthPage/AuthPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
      {activePage === 'courses' && <CoursesPage />}
      {activePage === 'learn' && <LearnPage />}
      {activePage === 'auth' && <AuthPage />}
    </div>
  );
}
