import { Page } from "@playwright/test";
import InstallationPage from "./InstallationPage";
import mainPage from "./mainPage";

export default abstract class FactoryPage{
    static CreateInstallationPage(page : Page) : InstallationPage {
        return new InstallationPage(page);
    }

    static CreateMainPage(page : Page) : mainPage {
        return new mainPage(page);
    }
}