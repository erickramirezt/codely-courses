import { expect, test } from '@playwright/test'
import { CourseTitleMother } from '../../modules/courses/domain/value-objects/course-title.mother'
import { CourseImageUrlMother } from '../../modules/courses/domain/value-objects/course-image-url-mother'

test('The Home Page successfully loads', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await page.getByLabel(/course title/i).fill(CourseTitleMother.create().value)
  await page.getByLabel(/image url/i).fill(CourseImageUrlMother.create().value)
  await page.getByRole('button', { name: /create course/i }).click()
  await expect(await page.getByRole('heading', {name: /course created/i})).toBeVisible()
  await expect(await page.getByRole('heading', {name: /course created/i})).toBeVisible()
})
