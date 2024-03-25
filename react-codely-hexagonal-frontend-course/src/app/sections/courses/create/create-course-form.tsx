import React, { useEffect, useState } from 'react'
import { CreateCourseFormData } from '../shared/course-context'
import { FormStatus, useCreateCourseForm } from './use-create-course-form'
import { useFormData } from '../../shared/use-form-data'
import { CourseTitle } from '@/modules/courses/domain/value-objects/course-title'
import { CourseImageUrl } from '@/modules/courses/domain/value-objects/course-image-url'

const initialState: CreateCourseFormData = {
  title: '',
  imageUrl: '',
}

export function CreateCourseForm() {
  const { formData, resetFormData, updateFormData } = useFormData(initialState)
  const { formStatus, submitForm, resetFormStatus, error } = useCreateCourseForm()
  const [errors, setErrors] = useState(initialState)

  useEffect(() => {
    const isTitleValid = CourseTitle.isValid(formData.title)
    const isImageUrlValid = CourseImageUrl.isValid(formData.imageUrl)

    setErrors({
      title: isTitleValid ? '' : CourseTitle.invalidMessage(formData.title),
      imageUrl: isImageUrlValid
        ? ''
        : CourseImageUrl.invalidMessage(formData.imageUrl),
    })
  }, [formData])

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()

    await submitForm(formData)
  }

  return (
    <>
      {formStatus === FormStatus.Loading && <section>Loading...</section>}
      {formStatus === FormStatus.Success && (
        <section>
          <h2>Course created!</h2>
          <button
            onClick={() => {
              resetFormData()
              resetFormStatus()
            }}
          >
            Create a new course
          </button>
        </section>
      )}
      {formStatus === FormStatus.Error && (
        <section>
          <h2>{error}</h2>
          <button onClick={resetFormStatus}>Retry</button>
        </section>
      )}
      {formStatus === FormStatus.Initial && (
        <section>
          <h2>Create a new course</h2>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor='title'>Course title</label>
              <input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={(ev) => updateFormData({ title: ev.target.value })}
              />
              {errors.title && <span className='text-red'>{errors.title}</span>}
            </fieldset>

            <fieldset>
              <label htmlFor='imageUrl'>Image URL</label>
              <input
                type='text'
                id='imageUrl'
                name='imageUrl'
                value={formData.imageUrl}
                onChange={(ev) => updateFormData({ imageUrl: ev.target.value })}
              />
            </fieldset>
            {formData.imageUrl !== '' && (
              <span className='text-red'>{errors.imageUrl}</span>
            )}

            <button type='submit'>Create course</button>
          </form>
        </section>
      )}
    </>
  )
}
