import Button from '../../components/ui/Button';
import styles from './CoursesPage.module.css';

export default function CoursesPage() {
  const courses = [
    {
      title: 'Java OOP & Backend',
      desc: 'Основи ООП, паттерни та розробка серверів',
      level: 'Junior',
    },
    {
      title: 'Frontend React & Vite',
      desc: 'Сучасна веб-розробка на React, хуки та компоненти',
      level: 'Junior / Middle',
    },
    {
      title: 'Data Structures & Algorithms',
      desc: 'Структури даних, алгоритми та підготовка до інтервʼю',
      level: 'All Levels',
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Каталог курсів</h2>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <span className={styles.badge}>{course.level}</span>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <Button variant="outline">Детальніше</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
