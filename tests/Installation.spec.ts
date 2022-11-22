import { test, expect } from '@playwright/test';
import InstallationPage from '../pages/InstallationPage';

test('Installation page has title and links', async ({ page }) => {
    var installationPage = new InstallationPage(page);
    await installationPage.Goto();

    
    var headerString = await (await installationPage.Header()).textContent();
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

    const writingTests = page.getByRole('link', { name: 'Writing Tests' });
    await expect(writingTests, 'nar bar links is not working').toHaveAttribute('href', '/docs/writing-tests');
    await writingTests.click();
    await expect(page, 'Page link url dircted to wrong path').toHaveURL(/.*writing-tests/);
});