import { Locator, Page } from "@playwright/test";

export default class Utils
{
    private readonly page : Page;
    /**
     *
     */
    constructor(page : Page)
    {
        this.page = page;
    }
    async Click(locater : Locator, selector? : string, nextState? : "attached" | "visible") : Promise<void>
    {
        await locater.click();
        if (selector != null)
        {
            await this.page.waitForSelector(selector, { state: nextState})
        }
    }

   async Locator(uniqueidentifier : string) : Promise<Locator>
   {
        return await this.page.locator(uniqueidentifier);
   }

   async LocatorFromlocater(locater : Locator, uniqueidentifier : string) : Promise<Locator>
   {
        return await locater.locator(uniqueidentifier);
   }

   GetByRole(role : "alert"|"alertdialog"|"application"|"article"|"banner"|"blockquote"|"button"|"caption"|"cell"|"checkbox"|"code"|"columnheader"|"combobox"|"complementary"|"contentinfo"|"definition"|"deletion"|"dialog"|"directory"|"document"|"emphasis"|"feed"|"figure"|"form"|"generic"|"grid"|"gridcell"|"group"|"heading"|"img"|"insertion"|"link"|"list"|"listbox"|"listitem"|"log"|"main"|"marquee"|"math"|"meter"|"menu"|"menubar"|"menuitem"|"menuitemcheckbox"|"menuitemradio"|"navigation"|"none"|"note"|"option"|"paragraph"|"presentation"|"progressbar"|"radio"|"radiogroup"|"region"|"row"|"rowgroup"|"rowheader"|"scrollbar"|"search"|"searchbox"|"separator"|"slider"|"spinbutton"|"status"|"strong"|"subscript"|"superscript"|"switch"|"tab"|"table"|"tablist"|"tabpanel"|"term"|"textbox"|"time"|"timer"|"toolbar"|"tooltip"|"tree"|"treegrid"|"treeitem",
    name : string | RegExp) : Locator
   {
     return this.page.getByRole(role, { name: name });
   }
   async Goto(url : string)
   {
        await this.page.goto(url);
   }

   async TextContent(locater : Locator) : Promise<string>
   {
        let text : string | null = await locater.textContent();
        return text === null ? "" : text
   }


   async Fill(locater : Locator, content : string) : Promise<void>
   {
          await locater.fill(content);  
   }

   async Close() : Promise<void>
   {
        await this.page.close(); 
   }
}