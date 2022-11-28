import { Page } from "@playwright/test";
import { commonData } from "../Data/CommonData";
import {factoryPage} from "../Factory";
import CommonSelectors from "../Selector/CommonSelectors";
import MainPageSelector from "../Selector/MainPageSelectors";
export default class MainPage{
    private readonly mainPageSelector : MainPageSelector
    private readonly utils;
    private readonly commonSelectors : CommonSelectors;

    constructor(page: Page) {
        this.mainPageSelector = factoryPage.InitMainPageSelector(page);
        this.utils = factoryPage.InitUtils(page);
        this.commonSelectors = factoryPage.InitCommonSelectors(page);
    }

    async GotoMainPage() : Promise<void> {
        await this.utils.Goto(commonData.PlayWriteUrl);
    }

    async ClickGetStartedLink()
    {
        var getStarted = await this.mainPageSelector.GetStartedLink();
        await this.utils.Click(getStarted);
    }

    async ClickSearchBox()
    {
        var searchBox = await this.commonSelectors.SearchBar();
        await this.utils.Click(searchBox);
    }

    async SearchAndClickTopHit(searchData : string)
    {
        await this.ClickSearchBox();
        var searchInput = await this.commonSelectors.SearchBox();
        await this.utils.Fill(searchInput, searchData)
        await this.utils.Click(await this.commonSelectors.FirstItemInSearchLink());
    }
    
}
