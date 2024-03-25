import { CourseCreator } from '@/modules/courses/application/create/course-creator'
import { AllCoursesGetter } from '@/modules/courses/application/get-all/all-courses-getter'
import { Course } from '@/modules/courses/domain/model/course'
import { CourseRepository } from '@/modules/courses/domain/repository/course-repository'
import React, { createContext, useContext, useEffect, useState } from 'react'

// TODO: CHANGE TO 

export interface CreateCourseFormData {
  title: string
  imageUrl: string
}

interface ContextState {
  courses: Course[]
  createCourse: (course: CreateCourseFormData) => Promise<void>
}

export const CourseContext = createContext<ContextState | undefined>(undefined)

export const CoursesContextProvider = ({
  children,
  repository,
}: React.PropsWithChildren<{ repository: CourseRepository }>) => {
  const allCoursesGetter = new AllCoursesGetter(repository)

  const [courses, setCourses] = useState<Course[]>([])

  async function createCourse({ title, imageUrl }: CreateCourseFormData) {
    const courseCreator = new CourseCreator(repository)
    const uuid = crypto.randomUUID()

    await courseCreator.run({ id: uuid, title, imageUrl })
    getCourses()
  }

  async function getCourses() {
    const courses = await allCoursesGetter.run()
    setCourses(courses)
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <CourseContext.Provider value={{ courses, createCourse }}>
      {children}
    </CourseContext.Provider>
  )
}

export const useCoursesContext = () => useContext(CourseContext) as ContextState
