import { CourseCard } from './course-card'
import { useCoursesContext } from '../shared/course-context'
import { useEffect } from 'react'
import { useGetCourses } from './use-get-all-courses'
import { ActionStatus } from '../../shared/use-form-data'

export function CoursesList() {
  const { courses } = useCoursesContext()
  const { actionStatus, error, getCourses } = useGetCourses()
  useEffect(() => {
    getCourses()
  }, [])
  return (
    <section>
      <h2>Current Courses</h2>
      <div>
        {actionStatus === ActionStatus.Loading && <p>Loading...</p>}
        {actionStatus === ActionStatus.Error && <p>{error}</p>}
        {actionStatus === ActionStatus.Success && (
          <>
          {courses.map((course) => (
            <CourseCard key={course.idValue} course={course} />
          ))}
        </>
        )}
      </div>
    </section>
  )
}
