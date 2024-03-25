import { create } from 'zustand'
import { FormStatus } from './use-create-course-form'
import { CreateCourseFormData } from '../shared/course-context'
import { LocalStorageCourseRepository } from '@/modules/courses/infrastructure/local-storage-course-repository'
import { CourseCreator } from '@/modules/courses/application/create/course-creator'

interface CreateCourseState {
  formStatus: FormStatus
  error: string
  submitForm: (formData: CreateCourseFormData) => Promise<void>
  resetFormStatus: () => void
}

export const useCreateCourse = create<CreateCourseState>()((set) => {
  return {
    error: '',
    formStatus: FormStatus.Initial,
    submitForm: async (formData: CreateCourseFormData) => {
      set({ formStatus: FormStatus.Loading })
      try {
        const repository = new LocalStorageCourseRepository()
        const courseCreator = new CourseCreator(repository)
        const id = crypto.randomUUID()
        await courseCreator.run({ id, ...formData })
        set({ formStatus: FormStatus.Success })
      } catch (error) {
        set({ formStatus: FormStatus.Error, error: (error as Error).message })
      }
    },
    resetFormStatus: () => {
      set({ formStatus: FormStatus.Initial })
    },
  }
})
