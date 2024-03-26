import { describe, it } from 'vitest'
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

    const titleInput = screen.getByLabelText(/title/i)
    userEvent.type(titleInput, "Awesome Hexagonal Architecture")
  })
})
