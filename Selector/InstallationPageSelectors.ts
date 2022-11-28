import { Locator, Page } from "@playwright/test"
import InstallationPageData from "../Data/InstallationPageData";

export default class InstallationPageSelectors
{
    private readonly page : Page;

    constructor(page : Page)
    {
        this.page = page;
    }

    async Header() : Promise<Locator>
    {
        return await this.page.locator(InstallationPageData.HeaderSelector);
    }

    async WritingTestLink() : Promise<Locator>
    {
        return this.page.getByRole('link', { name: 'Writing Tests' });
    }
}