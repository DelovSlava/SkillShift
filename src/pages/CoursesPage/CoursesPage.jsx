import { useCourses } from '../../hooks/useCourses';
import Button from '../../components/ui/Button';
import styles from './CoursesPage.module.css';

export default function CoursesPage() {
  const { courses, loading, activeFilter, setActiveFilter } = useCourses();

  const categories = ['All', 'Backend', 'Frontend', 'CS'];

  return (
    <div className={styles.container}>
      <h2>Каталог курсів</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px',
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeFilter === cat ? 'primary' : 'outline'}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          Завантаження курсів...
        </p>
      ) : (
        <div className={styles.grid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <span className={styles.badge}>{course.level}</span>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <Button variant="outline">Детальніше</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
