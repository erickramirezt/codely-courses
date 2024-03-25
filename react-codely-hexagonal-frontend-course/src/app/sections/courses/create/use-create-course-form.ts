import { useState } from 'react'
import { CreateCourseFormData, useCoursesContext } from '../shared/course-context'
import { FormStatus } from '../../shared/use-form-data'



export function useCreateCourseForm(): {
  formStatus: FormStatus
  submitForm: (formData: CreateCourseFormData) => Promise<void>
  resetFormStatus: () => void
  error: string
} {
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.Initial)
  const [error, setError] = useState<string>('null')
  const { createCourse } = useCoursesContext()

  async function submitForm(formData: CreateCourseFormData) {
    setFormStatus(FormStatus.Loading)

    try {
      await createCourse(formData)
      setFormStatus(FormStatus.Success)
    } catch (error) {
      setFormStatus(FormStatus.Error)
      setError((error as Error).message)
    }
  }

  function resetFormStatus() {
    setFormStatus(FormStatus.Initial)
  }

  return { formStatus, submitForm, resetFormStatus, error }
}
