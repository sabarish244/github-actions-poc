import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('hello');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Hello (Adele song) - Wikipedia Wikipedia https://en.wikipedia.org › wiki › Hello_(Adele_song)' }).click();
});
