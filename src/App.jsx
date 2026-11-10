import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import LearnPage from './pages/LearnPage/LearnPage';
import AuthPage from './pages/AuthPage/AuthPage';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}
