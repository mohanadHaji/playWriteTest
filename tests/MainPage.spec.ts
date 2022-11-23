import { test, expect } from '@playwright/test';
import FactoryPage from '../pages/Factory';

test('homepage has title and links to intro page', async ({ page }) => {
  var mainPage = FactoryPage.CreateMainPage(page);
  await mainPage.Goto();

  // Expect a title "to contain" a substring.
  await expect(page, 'Page have wrong title').toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted, 'Page get strated link have wrong href attribute').toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await mainPage.ClickGetStartedLink();

  // Expects the URL to contain intro.
  await expect(page, 'Page getStarted link url dircted to wrong path').toHaveURL(/.*intro/);
});

test('search box tests',async ( { page }) => {
  var mainPage = FactoryPage.CreateMainPage(page);
  await mainPage.Goto();
  // Click the search bar
  await mainPage.ClickSearchBox();

  // Eepect page to have search box visable
  const searchBox = await page.locator('#docsearch-input');
  await expect(searchBox, 'Search box is not visible').toHaveAttribute('placeholder', 'Search docs');
});