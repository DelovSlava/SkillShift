import { useState, useEffect } from 'react';

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((response) => response.json())
      .then((apiData) => {
        // отриману відповідь переписуємо
        const titles = [
          'Java OOP & Backend',
          'Frontend React & Vite',
          'Data Structures & Algorithms',
        ];
        const categories = ['Backend', 'Frontend', 'CS'];
        const levels = ['Junior', 'Junior / Middle', 'All Levels'];

        const formattedCourses = apiData.map((item, index) => ({
          id: item.id,
          title: titles[index] || item.title.slice(0, 20),
          desc: item.body.slice(0, 60) + '...',
          level: levels[index] || 'Junior',
          category: categories[index] || 'Backend',
        }));

        setCourses(formattedCourses);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження даних з API:', error);
        setLoading(false);
      });
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
