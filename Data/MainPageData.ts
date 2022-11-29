class MainPageData
{
    TitleRegx : RegExp =  /Playwright/

    IntorRegx : RegExp = /.*intro/;
}

let mainPageData : MainPageData = new MainPageData();

export {mainPageData}