import React, { useEffect, useState } from 'react'
import { CreateCourseFormData } from '../shared/course-context'
import { ActionStatus, useFormData } from '../../shared/use-form-data'
import { CourseTitle } from '@/modules/courses/domain/value-objects/course-title'
import { CourseImageUrl } from '@/modules/courses/domain/value-objects/course-image-url'
import { useCreateCourse } from './use-create-course'
import { useGetAllCourses } from '../get-all/use-get-all-courses'

const initialState: CreateCourseFormData = {
  title: '',
  imageUrl: '',
}

export function CreateCourseForm() {
  const { formData, resetFormData, updateFormData } = useFormData(initialState)
  const createCourse = useCreateCourse((state) => state.createCourse)
  const formStatus = useCreateCourse((state) => state.formStatus)
  const resetFormStatus = useCreateCourse((state) => state.resetFormStatus)
  const error = useCreateCourse((state) => state.error)
  const getAllCourses = useGetAllCourses((state) => state.getAllCourses)
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

    await createCourse(formData)
    await getAllCourses()
  }

  return (
    <>
      {formStatus === ActionStatus.Loading && <section>Loading...</section>}
      {formStatus === ActionStatus.Success && (
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
      {formStatus === ActionStatus.Error && (
        <section>
          <h2>{error}</h2>
          <button onClick={resetFormStatus}>Retry</button>
        </section>
      )}
      {formStatus === ActionStatus.Initial && (
        <section>
          <h2>Create a new course</h2>

          <form onSubmit={handleSubmit}>
            <fieldset className='grid'>
              <label htmlFor='title'>Course title</label>
              <input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={(ev) => updateFormData({ title: ev.target.value })}
              />
              {errors.title && (
                <span className='text-red-600'>{errors.title}</span>
              )}
            </fieldset>

            <fieldset className='grid'>
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
              <span className='text-red-600'>{errors.imageUrl}</span>
            )}
            <br />
            <button type='submit'>Create course</button>
          </form>
        </section>
      )}
    </>
  )
}
