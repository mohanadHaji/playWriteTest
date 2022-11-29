import { test, expect, Page } from '@playwright/test';
import {commonData} from '../Data/CommonData';
import {installationPageData} from '../Data/InstallationPageData';
import {factoryPage} from '../Factory';
import InstallationPage from '../pages/InstallationPage';
import InstallationPageSelectors from '../Selector/InstallationPageSelectors';

test.describe("Installation page tests", () => {
    let installationPage : InstallationPage;
    let installationPageSelectors : InstallationPageSelectors;
    let page : Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        [installationPage, installationPageSelectors] = factoryPage.InitInstallationPage(page);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Installation page has title', async () => {
        await installationPage.GotoInstallationPage();
        var headerString = await installationPage.HeaderText();
        await expect(headerString, 'Page title is wrong').toBe("Installation");
    
        // const linkToPage = '/docs/intro#'
        // var linksArray : string[] = 
        // [linkToPage + 'installing-playwright',
        // linkToPage + 'whats-installed',
        // linkToPage + 'running-the-example-test',
        // linkToPage + 'html-test-reports'];
    
        // var links = await installationPage.LinksList();
        // var i = 0;
        // links.forEach(async locator => {
        //     await expect(locator).toHaveAttribute('href', linksArray[i])
        //     i++;
        // })
    });

    test('Installation page has links', async ()=> {
        await installationPage.GotoInstallationPage();
        await expect(await installationPageSelectors.WritingTestLink(), 'nar bar links is not working').toHaveAttribute('href', commonData.WritingTestsPageLink);
        await installationPage.GoTOWritingTestPage();
        await expect(page, 'Page link url dircted to wrong path').toHaveURL(installationPageData.WritingTestPageRegx);
    })
});