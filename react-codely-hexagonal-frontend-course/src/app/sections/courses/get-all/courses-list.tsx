import { CourseCard } from "./course-card";
import { useCoursesContext } from "../shared/course-context";

export function CoursesList() {
  const {courses} = useCoursesContext()

  return (
    <section>
      <h2>Current Courses</h2>
      <div>
        {courses.map((course) => (
          <CourseCard key={course.idValue} course={course} />
        ))}
      </div>
    </section>
  )
}