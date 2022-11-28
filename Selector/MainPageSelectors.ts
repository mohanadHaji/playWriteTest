import { Page, Locator } from '@playwright/test';

export default class MainPageSelector
{
    private readonly page : Page;

    constructor(page: Page)
    {
        this.page = page;
    }

   async GetStartedLink() : Promise<Locator>
   {
        return await this.page.getByRole('link', { name: 'Get started' });
   }
}