import { Course } from '@/modules/courses/domain/model/course'
import { FormStatus } from '../create/use-create-course-form'
import { create } from 'zustand'
import { LocalStorageCourseRepository } from '@/modules/courses/infrastructure/local-storage-course-repository'
import { AllCoursesGetter } from '@/modules/courses/application/get-all/all-courses-getter'

interface GetAllCoursesState {
  formStatus: FormStatus
  error: string
  courses: Course[]
  getCourses: () => Promise<void>
}

export const useGetAllCourses = create<GetAllCoursesState>((set) => {
  return {
    error: '',
    formStatus: FormStatus.Initial,
    courses: [],
    getCourses: async () => {
      set({ formStatus: FormStatus.Loading })

      try {
        const repository = new LocalStorageCourseRepository()
        const allCoursesGetter = new AllCoursesGetter(repository)
        const courses = await allCoursesGetter.run()
        set({ formStatus: FormStatus.Success, courses })
      } catch (error) {
        set({ formStatus: FormStatus.Error, error: (error as Error).message })
      }
    },
  }
})
