import { Locator, Page } from "@playwright/test"
import Utils from "../Utils/Utils";

export default class InstallationPageSelectors
{
    private readonly utils : Utils;

    constructor(page : Page)
    {
        this.utils = new Utils(page);
    }

    async Header() : Promise<Locator>
    {
        return await this.utils.Locator(".theme-doc-markdown h1");
    }

    WritingTestLink() : Locator
    {
        return this.utils.GetByRole('link', 'Writing Tests')
    }
}