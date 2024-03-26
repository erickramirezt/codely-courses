import { expect, test } from '@playwright/test'

test('The Home Page successfully loads', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await page.getByLabel(/course title/i).fill('Awesome Hexagonal Architecture')
  await page.getByLabel(/image url/i).fill('https://acerosrmspa.cl/wp-content/uploads/2023/10/cropped-cropped-logo_final-e1698276884150.jpg')
  await page.getByRole('button', { name: /create course/i }).click()
  await expect(await page.getByRole('heading', {name: /course created/i})).toBeVisible()
  await expect(await page.getByRole('heading', {name: /course created/i})).toBeVisible()
})
