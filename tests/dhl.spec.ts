import { test, expect, defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',
  }
});

test('test dhl status', async ({ page }) => {
  await page.goto('https://www.dhl.de/de/privatkunden/pakete-empfangen/verfolgen.html?lang=de&idc=00340434666024752624&rfn=&extendedSearch=true');
  const infoText = page.locator('.infoText');
  await expect(infoText).toHaveText('Vorbereitung für Weitertransport');
});
