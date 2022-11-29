import { Page, Locator } from '@playwright/test';
import { factoryPage } from '../Factory';
import Utils from '../Utils/Utils';

export default class MainPageSelector
{
    private readonly page : Page;
    private readonly utils : Utils;

    constructor(page: Page)
    {
        this.page = page;
        this.utils = factoryPage.InitUtils(page);
    }

   GetStartedLink() : Locator
   {
        return this.utils.GetByRole('link', 'Get started');
   }
}