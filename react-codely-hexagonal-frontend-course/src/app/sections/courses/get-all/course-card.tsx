import { Course } from '@/modules/courses/domain/model/course'

export function CourseCard({ course }: { course: Course }) {
  return (
    <div>
      <img
        src={course.imageUrlValue}
        alt={`${course.titleValue} course image`}
      />

      <h3>{course.titleValue}</h3>
    </div>
  )
}
