import { expect, Locator, Page } from "@playwright/test";
export default class MainPage{
    private readonly page : Page
    private readonly searchBar : Locator
    private readonly getStarted : Locator

    constructor(page: Page) {
        this.page = page;
        this.searchBar = this.page.locator(".DocSearch");
        this.getStarted = page.getByRole('link', { name: 'Get started' });
    }

    async Goto() : Promise<void> {
        await this.page.goto('https://playwright.dev/');
    }
    async ClickSearchBox() : Promise<void>{
        await this.searchBar.click();
    }

   async ClickGetStartedLink() : Promise<void>{
        await this.getStarted.click();
   }
}
