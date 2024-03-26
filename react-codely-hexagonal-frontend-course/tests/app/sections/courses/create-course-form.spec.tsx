import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LocalStorageCourseRepository } from '../../../../src/modules/courses/infrastructure/local-storage-course-repository'
import { CoursesContextProvider } from '../../../../src/app/sections/courses/shared/course-context'
import React from 'react'
import { CreateCourseForm } from '../../../../src/app/sections/courses/create/create-course-form'

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
    await user.type(titleInput, 'Awesome Hexagonal Architecture')

    const imageUrlInput = screen.getByLabelText(/image url/i)
    await user.type(imageUrlInput, 'https://acerosrmspa.cl/wp-content/uploads/2023/10/cropped-cropped-logo_final-e1698276884150.jpg')

    const submitButton = screen.getByRole('button', { name: /create course/i })

    userEvent.click(submitButton)

    const successMessage = await screen.findByRole('heading', {
      name: /course created/i,
    })

    expect(successMessage).toBeTruthy()
  })
})
