import { CreateCourseForm } from '@/app/sections/courses/create/create-course-form'
import { CoursesList } from '@/app/sections/courses/get-all/courses-list'
// import { CoursesContextProvider } from '@/app/sections/courses/shared/course-context'
// import { LocalStorageCourseRepository } from '@/modules/courses/infrastructure/local-storage-course-repository'

export function HomePage() {
  // const repository = new LocalStorageCourseRepository()

  return (
    // <CoursesContextProvider
    //   repository={repository}
    // >
      <main>
        <h1>Codely</h1>
        <CoursesList />
        <CreateCourseForm />
      </main>
    // </CoursesContextProvider>
  )
}
