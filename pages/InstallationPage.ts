import { Page, Locator } from '@playwright/test';

export default class {

    private readonly page : Page;

    constructor(page: Page) {
        this.page = page;    
    }

    async Goto() : Promise<void> {
        await this.page.goto('https://playwright.dev/docs/intro');
    }

    async Header() : Promise<Locator> {
        return await this.page.locator(".theme-doc-markdown h1");
    }

    // LinksList() : Locator[] {
    //     var locators : Locator[] = [this.page.locator('text=How to install Playwright'),
    //     this.page.locator('text=What\'s Installed'),
    //     this.page.locator('text=How to run the example test'),
    //     this.page.locator('text=How to open the HTML test report')];
        
    //     return  locators;
    // }
}