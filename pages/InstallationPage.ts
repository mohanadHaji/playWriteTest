import { Page, Locator } from '@playwright/test';
import InstallationPageSelectors from '../Selector/InstallationPageSelectors';
import MainPageSelector from '../Selector/MainPageSelectors';

export default class {

    private readonly page : Page;
    private readonly installationPageSelectors : InstallationPageSelectors;

    constructor(page: Page) {
        this.page = page;
        this.installationPageSelectors = new InstallationPageSelectors(page);  
    }

    async GotoInstallationPage() : Promise<void> {
        await this.page.goto('https://playwright.dev/docs/intro');
    }

    async HeaderText() : Promise<string | null> {
        return await (await this.installationPageSelectors.Header())?.textContent();
    }

    async GoTOWritingTestPage()
    {
        await (await this.installationPageSelectors.WritingTestLink()).click();
    }
    // LinksList() : Locator[] {
    //     var locators : Locator[] = [this.page.locator('text=How to install Playwright'),
    //     this.page.locator('text=What\'s Installed'),
    //     this.page.locator('text=How to run the example test'),
    //     this.page.locator('text=How to open the HTML test report')];
        
    //     return  locators;
    // }
}