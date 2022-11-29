import { Page } from '@playwright/test';
import { commonData } from '../Data/CommonData';
import { factoryPage } from '../Factory';
import InstallationPageSelectors from '../Selector/InstallationPageSelectors';
import Utils from '../Utils/Utils';

export default class {

    private readonly installationPageSelectors : InstallationPageSelectors;
    private readonly utils : Utils;

    constructor(page: Page) 
    {
        this.installationPageSelectors = new InstallationPageSelectors(page);
        this.utils = factoryPage.InitUtils(page);
    }

    async GotoInstallationPage() : Promise<void> {
        await this.utils.Goto(commonData.PlayWriteUrl + commonData.IntroLink);
    }

    async HeaderText() : Promise<string> 
    {
        return await this.utils.TextContent(await this.installationPageSelectors.Header());
    }

    async GoTOWritingTestPage()
    {
        await this.utils.Click(await this.installationPageSelectors.WritingTestLink());
    }
    // LinksList() : Locator[] {
    //     var locators : Locator[] = [this.page.locator('text=How to install Playwright'),
    //     this.page.locator('text=What\'s Installed'),
    //     this.page.locator('text=How to run the example test'),
    //     this.page.locator('text=How to open the HTML test report')];
        
    //     return  locators;
    // }
}