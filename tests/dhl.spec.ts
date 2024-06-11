import { test, expect, Locator } from '@playwright/test';

test('mock api calls', async ({ page }) => {
  await page.goto('https://www.dhl.de/de/privatkunden/pakete-empfangen/verfolgen.html?lang=de&idc=00340434666024752624&rfn=&extendedSearch=true');
  const infoText = page.locator('.infoText');
  await expect(infoText).toHaveText('Status offen');
});