import { Course } from '@/modules/courses/domain/model/course'
import { create } from 'zustand'
import { LocalStorageCourseRepository } from '@/modules/courses/infrastructure/local-storage-course-repository'
import { AllCoursesGetter } from '@/modules/courses/application/get-all/all-courses-getter'
import { ActionStatus } from '../../shared/use-form-data'

interface GetAllCoursesState {
  actionStatus: ActionStatus
  error: string
  courses: Course[]
  getAllCourses: () => Promise<void>
}

export const useGetAllCourses = create<GetAllCoursesState>((set) => {
  return {
    error: '',
    actionStatus: ActionStatus.Initial,
    courses: [],
    getAllCourses: async () => {
      set({ actionStatus: ActionStatus.Loading })

      try {
        const repository = new LocalStorageCourseRepository()
        const allCoursesGetter = new AllCoursesGetter(repository)
        const courses = await allCoursesGetter.run()
        set({ actionStatus: ActionStatus.Success, courses })
      } catch (error) {
        set({ actionStatus: ActionStatus.Error, error: (error as Error).message })
      }
    },
  }
})
