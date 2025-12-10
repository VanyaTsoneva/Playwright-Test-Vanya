import { Page, Locator } from "@playwright/test";

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navLinks: Locator;
constructor(page: Page) {
this.page = page;
this.getStartedBtn = page.locator('#get-started');
this.headingText = page.locator('text=Think different. Make different.');
this.homeLink = page.locator('#zak-primary-menu >> text=Home');
//this.searchIcon = page.locator('//*[@id="zak-primary-menu"]//*[@class="zak-header-search__toggle"]');
this.searchIcon = page.locator('.zak-header-search__toggle').first();
this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
}
async navigate (){
    await this.page.goto('/');
    //async when you have more steps
    //return, when you have one. Async+await
}
getNavLinksText() {
    return this.navLinks.allTextContents()

}
}

export default HomePage;
//we export it, because we are going to reuse it in other tests
//in constructor we will save all the selectors