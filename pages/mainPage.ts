import { expect, Locator, Page } from "@playwright/test";
import FactoryPage from "../Factory";
import CommonSelectors from "../Selector/CommonSelectors";
import MainPageSelector from "../Selector/MainPageSelectors";
export default class MainPage{
    private readonly page : Page
    private readonly mainPageSelector : MainPageSelector

    constructor(page: Page) {
        this.page = page;
        this.mainPageSelector = FactoryPage.InitMainPageSelector(page);
    }

    async GotoMainPage() : Promise<void> {
        await this.page.goto('https://playwright.dev/');
    }

    async ClickGetStartedLink()
    {
        var getStarted = await this.mainPageSelector.GetStartedLink();
        await getStarted.click();
    }

    async ClickSearchBox()
    {
        var searchBox = await CommonSelectors.SearchBar(this.page);
        await searchBox.click();
    }

    async SearchAndClickTopHit(searchData : string)
    {
        await this.ClickSearchBox();
        var searchInput = await CommonSelectors.SearchBox(this.page);
        await searchInput.fill(searchData)
        await ( await this.page.locator('#docsearch-item-0 a')).click()
    }
    
}
