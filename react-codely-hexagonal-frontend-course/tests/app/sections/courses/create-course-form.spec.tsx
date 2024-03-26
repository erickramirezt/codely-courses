import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LocalStorageCourseRepository } from '../../../../src/modules/courses/infrastructure/local-storage-course-repository'
import { CoursesContextProvider } from '../../../../src/app/sections/courses/shared/course-context'
import React from 'react'
import { CreateCourseForm } from '../../../../src/app/sections/courses/create/create-course-form'
import { CourseTitleMother } from '../../../modules/courses/domain/value-objects/course-title.mother'
import { CourseImageUrlMother } from '../../../modules/courses/domain/value-objects/course-image-url-mother'
import { CourseTitle } from '../../../../src/modules/courses/domain/value-objects/course-title'
// import { CourseImageUrl } from '../../../../src/modules/courses/domain/value-objects/course-image-url'

describe('create course form component', () => {
  it('displays success message when data is correct', async () => {
    const repository = new LocalStorageCourseRepository()
    render(
      <CoursesContextProvider repository={repository}>
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const user = userEvent.setup()

    const titleInput = screen.getByLabelText(/course title/i)
    await user.type(titleInput, CourseTitleMother.create().value)

    const imageUrlInput = screen.getByLabelText(/image url/i)
    await user.type(
      imageUrlInput,
      CourseImageUrlMother.create().value
    )

    const submitButton = screen.getByRole('button', { name: /create course/i })

    userEvent.click(submitButton)

    const successMessage = await screen.findByRole('heading', {
      name: /course created/i,
    })

    expect(successMessage).toBeTruthy()
  })

  it('displays error message if title is too short', async () => {
    const repository = new LocalStorageCourseRepository()
    render(
      <CoursesContextProvider repository={repository}>
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const user = userEvent.setup()

    const title = CourseTitleMother.createTooShort()
    const titleInput = screen.getByLabelText(/course title/i)
    await user.type(titleInput, title)

    const imageUrlInput = screen.getByLabelText(/image url/i)
    await user.type(
      imageUrlInput,
      CourseImageUrlMother.create().value
    )

    const submitButton = screen.getByRole('button', { name: /create course/i })

    userEvent.click(submitButton)

    const errorMessage = await screen.findByRole('heading', {
      name: CourseTitle.invalidMessage(title),
    })

    expect(errorMessage).toBeTruthy()
  })

  it('displays error message if title is too long', async () => {
    const repository = new LocalStorageCourseRepository()
    render(
      <CoursesContextProvider repository={repository}>
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const user = userEvent.setup()

    const title = CourseTitleMother.createTooLong()
    const titleInput = screen.getByLabelText(/course title/i)
    await user.type(titleInput, title)

    const imageUrlInput = screen.getByLabelText(/image url/i)
    await user.type(
      imageUrlInput,
      CourseImageUrlMother.create().value
    )

    const submitButton = screen.getByRole('button', { name: /create course/i })

    userEvent.click(submitButton)

    const errorMessage = await screen.findByRole('heading', {
      name: CourseTitle.invalidMessage(title),
    })

    expect(errorMessage).toBeDefined()
  })
})
