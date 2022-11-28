import { Page } from "@playwright/test";
import InstallationPage from "./pages/InstallationPage";
import MainPage from "./pages/MainPage";
import InstallationPageSelectors from "./Selector/InstallationPageSelectors";
import MainPageSelector from "./Selector/MainPageSelectors";

export default abstract class FactoryPage{
    static InitInstallationPage(page : Page) : [InstallationPage, InstallationPageSelectors]
    {
        return [new InstallationPage(page), new InstallationPageSelectors(page)];
    }

    static InitMainPageTests(page : Page) : [MainPage, MainPageSelector]
    {
        return [new MainPage(page), new MainPageSelector(page)];
    }

    static InitMainPageSelector(page : Page) : MainPageSelector
    {
        return new MainPageSelector(page);
    }

    static InitInstallationPageSelectors(page : Page) : InstallationPageSelectors
    {
        return new InstallationPageSelectors(page);
    }
}