import { Page } from "@playwright/test";
import InstallationPage from "./pages/InstallationPage";
import MainPage from "./pages/MainPage";
import CommonSelectors from "./Selector/CommonSelectors";
import InstallationPageSelectors from "./Selector/InstallationPageSelectors";
import MainPageSelector from "./Selector/MainPageSelectors";
import Utils from "./Utils/Utils";

class FactoryPage{
    InitInstallationPage(page : Page) : [InstallationPage, InstallationPageSelectors]
    {
        return [new InstallationPage(page), new InstallationPageSelectors(page)];
    }

    InitMainPageTests(page : Page) : [MainPage, MainPageSelector]
    {
        return [new MainPage(page), new MainPageSelector(page)];
    }

    InitMainPageSelector(page : Page) : MainPageSelector
    {
        return new MainPageSelector(page);
    }

    InitInstallationPageSelectors(page : Page) : InstallationPageSelectors
    {
        return new InstallationPageSelectors(page);
    }

    InitUtils(page : Page) : Utils
    {
        return new Utils(page);
    }

    InitCommonSelectors(page : Page) : CommonSelectors
    {
        return new CommonSelectors(page);
    }
}

let factoryPage = new FactoryPage();

export {factoryPage};