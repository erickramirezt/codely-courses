import { create } from 'zustand'
import { CreateCourseFormData } from '../shared/course-context'
import { LocalStorageCourseRepository } from '@/modules/courses/infrastructure/local-storage-course-repository'
import { CourseCreator } from '@/modules/courses/application/create/course-creator'
import { ActionStatus } from '../../shared/use-form-data'

interface CreateCourseState {
  formStatus: ActionStatus
  error: string
  createCourse: (formData: CreateCourseFormData) => Promise<void>
  resetFormStatus: () => void
}

export const useCreateCourse = create<CreateCourseState>()((set) => {
  return {
    error: '',
    formStatus: ActionStatus.Initial,
    createCourse: async (formData: CreateCourseFormData) => {
      set({ formStatus: ActionStatus.Loading })
      try {
        const repository = new LocalStorageCourseRepository()
        const courseCreator = new CourseCreator(repository)
        const id = crypto.randomUUID()
        await courseCreator.run({ id, ...formData })
        set({ formStatus: ActionStatus.Success })
      } catch (error) {
        set({ formStatus: ActionStatus.Error, error: (error as Error).message })
      }
    },
    resetFormStatus: () => {
      set({ formStatus: ActionStatus.Initial })
    },
  }
})
