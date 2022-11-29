import { Page, Locator } from '@playwright/test';
import { factoryPage } from '../Factory';
import Utils from '../Utils/Utils';

export default class CommonSelectors
{
    private readonly utils : Utils;
    /**
     *
     */
    constructor(page : Page) 
    {
        this.utils = factoryPage.InitUtils(page);
    }
    async SearchBar() : Promise<Locator>
    {
        return await this.utils.Locator(".DocSearch");
    }

    async SearchBox() : Promise<Locator>
    {
        return await this.utils.Locator('#docsearch-input');
    }

    async Footer() : Promise<Locator>
    {
        return await this.utils.Locator(".footer");
    }

    async CopyRightFooter() : Promise<Locator>
    {
        var footer = await this.Footer();
        return await this.utils.LocatorFromlocater(footer, '.footer__copyright')
    }

    async FirstItemInSearchLink() : Promise<Locator>
    {
        return await this.utils.Locator('#docsearch-item-0 a')
    }
}