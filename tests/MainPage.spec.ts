import { test, expect, Page } from '@playwright/test';
import CommonData from '../Data/CommonData';
import MainPageData from '../Data/MainPageData';
import FactoryPage from '../Factory';
import MainPage from '../pages/MainPage';
import CommonSelectors from '../Selector/CommonSelectors';
import MainPageSelector from '../Selector/MainPageSelectors';

test.describe("Main page tests", () => {
  let mainPage : MainPage;
  let mainPageSelector : MainPageSelector;
  let page : Page;

  test.beforeAll(async ({ browser }) => 
  {
    page = await browser.newPage();
    [mainPage, mainPageSelector] = FactoryPage.InitMainPageTests(page);
  });

  test.beforeEach(async () =>
  {
    await mainPage.GotoMainPage();
  });

  test('homepage has title and links to intro page', async () => 
  {
      // Expect a title "to contain" a substring.
      await expect(page, 'Page have wrong title').toHaveTitle(MainPageData.TitleRegx);
    
      // create a locator
      const getStarted = await mainPageSelector.GetStartedLink();
    
      // Expect an attribute "to be strictly equal" to the value.
      await expect(getStarted, 'Page get strated link have wrong href attribute').toHaveAttribute('href', CommonData.IntroLink);
    
      // Click the get started link.
      await mainPage.ClickGetStartedLink();
    
      // Expects the URL to contain intro.
      await expect(page, 'Page getStarted link url dircted to wrong path').toHaveURL(MainPageData.IntorRegx);
  });

  test('search box tests',async () =>
   {
      // Click the search bar
      await mainPage.ClickSearchBox();
    
      // Eepect page to have search box visable
      const searchBox = await CommonSelectors.SearchBox(page);
      await expect(searchBox, 'Search box is not visible').toHaveAttribute('placeholder', CommonData.SearchBoxString);
  });

  test('search box: search', async () =>
  {
    await mainPage.SearchAndClickTopHit(CommonData.SearchData);    
    await expect(page, 'Page Search box link url dircted to wrong path').toHaveURL(MainPageData.IntorRegx);
  });

  test.afterAll(async () => 
  {
    await page.close();
  });

});