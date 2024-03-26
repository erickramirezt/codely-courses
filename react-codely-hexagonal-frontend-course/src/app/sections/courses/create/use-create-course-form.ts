import { useState } from 'react'
import {
  CreateCourseFormData,
  useCoursesContext,
} from '../shared/course-context'
import { ActionStatus } from '../../shared/use-form-data'

export function useCreateCourseForm(): {
  formStatus: ActionStatus
  submitForm: (formData: CreateCourseFormData) => Promise<void>
  resetFormStatus: () => void
  error: string
} {
  const [formStatus, setFormStatus] = useState<ActionStatus>(ActionStatus.Initial)
  const [error, setError] = useState<string>('')
  const { createCourse } = useCoursesContext()

  async function submitForm(formData: CreateCourseFormData) {
    setFormStatus(ActionStatus.Loading)

    try {
      await createCourse(formData)
      setFormStatus(ActionStatus.Success)
    } catch (error) {
      setFormStatus(ActionStatus.Error)
      setError((error as Error).message)
    }
  }

  function resetFormStatus() {
    setFormStatus(ActionStatus.Initial)
  }

  return { formStatus, submitForm, resetFormStatus, error }
}
