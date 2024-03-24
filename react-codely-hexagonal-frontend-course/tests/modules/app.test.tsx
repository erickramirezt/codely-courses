import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import { HomePage } from '../../src/app/pages/application/home-page'

test('home page', async () => {
  const page = render(<HomePage />)

  const user = userEvent.setup()

  const title = page.getByText(/home page/i)
  expect(title).toBeTruthy()

  const button = page.getByRole('button')
  await user.tripleClick(button)

  const result = button.innerHTML.includes('3')
  expect(result).toBeTruthy()
})
