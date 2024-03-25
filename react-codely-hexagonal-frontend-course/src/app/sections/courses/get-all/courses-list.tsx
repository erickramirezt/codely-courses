import { useEffect } from 'react'
import { CourseCard } from './course-card'
import { useGetAllCourses } from './use-get-all-courses'
import { ActionStatus } from '../../shared/use-form-data'

export function CoursesList() {
  const courses = useGetAllCourses((state) => state.courses)
  const getAllCourses = useGetAllCourses((state) => state.getAllCourses)
  const actionStatus = useGetAllCourses((state) => state.actionStatus)
  const error = useGetAllCourses((state) => state.error)
  useEffect(() => {
    getAllCourses()
  }, [])
  return (
    <section>
      <h2>Current Courses</h2>
      <div>
        {actionStatus === ActionStatus.Loading && <div>Loading...</div>}
        {actionStatus === ActionStatus.Error && <div>{error}</div>}
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
