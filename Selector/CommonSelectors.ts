import { Page, Locator } from '@playwright/test';

export default class CommonSelectors
{
    static async SearchBar(page : Page) : Promise<Locator>
    {
        return await page.locator(".DocSearch");
    }

    static async SearchBox(page: Page) : Promise<Locator>
    {
        return await page.locator('#docsearch-input');
    }

    static async Footer(page : Page) : Promise<Locator>
    {
        return await page.locator(".footer");
    }

    async CopyRightFooter(page : Page) : Promise<Locator>
    {
        var footer = await CommonSelectors.Footer(page);
        return await footer.locator('.footer__copyright')
    }
}