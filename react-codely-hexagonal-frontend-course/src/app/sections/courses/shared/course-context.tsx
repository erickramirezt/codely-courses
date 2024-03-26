import { CourseCreator } from '@/modules/courses/application/create/course-creator'
import { AllCoursesGetter } from '@/modules/courses/application/get-all/all-courses-getter'
import { Course } from '@/modules/courses/domain/model/course'
import { CourseRepository } from '@/modules/courses/domain/repository/course-repository'
import React, { createContext, useContext, useState } from 'react'

export interface CreateCourseFormData {
  title: string
  imageUrl: string
}

interface CourseContextState {
  courses: Course[]
  createCourse: (course: CreateCourseFormData) => Promise<void>
  getAllCourses: () => Promise<void>
}

export const CourseContext = createContext<CourseContextState | undefined>(
  undefined
)

export function CoursesContextProvider({
  children,
  repository,
}: React.PropsWithChildren<{ repository: CourseRepository }>) {
  const allCoursesGetter = new AllCoursesGetter(repository)

  const [courses, setCourses] = useState<Course[]>([])

  async function createCourse({ title, imageUrl }: CreateCourseFormData) {
    const courseCreator = new CourseCreator(repository)
    const uuid = crypto.randomUUID()

    await courseCreator.run({ id: uuid, title, imageUrl })
  }

  async function getAllCourses() {
    const courses = await allCoursesGetter.run()
    setCourses(courses)
  }

  return (
    <CourseContext.Provider value={{ courses, createCourse, getAllCourses }}>
      {children}
    </CourseContext.Provider>
  )
}

export function useCoursesContext() {
  const context = useContext(CourseContext) as CourseContextState

  if (!context) {
    throw new Error('useCoursesContext must be used within a CoursesContextProvider')
  }

  return context
}
