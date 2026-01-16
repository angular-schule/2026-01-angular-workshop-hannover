import { expect, test } from '@playwright/test';

test('StartPage has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page.getByTestId('pageHeader')).toContainText('Book Rating')
});
