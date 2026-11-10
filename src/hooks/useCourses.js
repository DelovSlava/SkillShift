import { useState, useEffect } from 'react';

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // Імітація асинхронного GET-запиту (fetch)
    const timer = setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: 'Java OOP & Backend',
          desc: 'Основи ООП, паттерни та розробка серверів',
          level: 'Junior',
          category: 'Backend',
        },
        {
          id: 2,
          title: 'Frontend React & Vite',
          desc: 'Сучасна веб-розробка на React, хуки та компоненти',
          level: 'Junior / Middle',
          category: 'Frontend',
        },
        {
          id: 3,
          title: 'Data Structures & Algorithms',
          desc: 'Структури даних, алгоритми та підготовка до інтервʼю',
          level: 'All Levels',
          category: 'CS',
        },
      ]);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const filteredCourses =
    activeFilter === 'All'
      ? courses
      : courses.filter((c) => c.category === activeFilter);

  return {
    courses: filteredCourses,
    loading,
    activeFilter,
    setActiveFilter,
  };
}
