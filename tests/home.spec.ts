import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
         homePage=new HomePage(page);
        await homePage.navigate()
    })
    
test("Open HomePage and verify title", async ({ page }) => {
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
});

test("Open about page and verify title", async ({ page }) => {
    homePage = new HomePage(page);
     //open URL
    await page.goto("https://practice.sdetunicorns.com/about");
    
    //verify title
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
})

test("Click get started button using CSS selector", async ({ page }) => {
    //clich the button. If we have have a promise - await is required
    //await page.locator('#get-started').click()
    await homePage.getStartedBtn.click()
    //verify url has #get-started
    //text insensitive text=Log, text sensitive text="Log in"
    // instead of writing the whole URL, we can write down toHaveUrl(/.*№get-started )
    await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
})

test("Verify heading textis visible using text selector", async ({ page }) => {

    //const headingText = await page.locator('text=Think different. Make different.')
    const headingText = await homePage.headingText
    //verify that the heading text is visible
    //the searching text must be unique in case we use this selector
    //when we copy and paste the text we can see if it is unique or not
    await expect(headingText).toBeVisible();
})
test('Verify home link is enabled using text and css selector', async ({ page }) => {
    //find the home text. Home is not unique. FIrst go and find the primary menu and inside
    //this menu find the text home.
    //another options:
    //const homeText = await page.locator('#primary-menu:has-text("Home")')
    //const homeText = await page.locator('#zak-primary-menu >> text=Home')
    const homeText = await homePage.homeLink
    //verify that the heading text is visible
    //the searching text must be unique in case we use this selector
    //when we copy and paste the text we can see if it is unique or not

    await expect(homeText).toBeEnabled();
})

test('Verify search icon is visible using xpath selector', async ({ page }) => {
    //find the search icon
    //div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']
  //  const searchIcon = await page.locator('//*[@id="zak-primary-menu"]//*[@class="zak-header-search__toggle"]')
  const searchIcon = await homePage.searchIcon
    //verify that the heading text is visible
    //the searching text must be unique in case we use this selector
    //when we copy and paste the text we can see if it is unique or not

    await expect(searchIcon).toBeVisible();
    //so I can go to the primary menu and see all the items, starting with
    //menu, I should check this command in the inspect menu
    //#primary-menu li[id*=menu]
})
test('Verify text to all nav links', async ({ page }) => {
const expectedLinks = [
    "Home",
    "About",
    "Shop",
    "Blog",
    "Contact",
    "My account",
];
    
    //find the nav links
    //const navLinks = await page.locator('#zak-primary-menu li[id*=menu]')
   // const navLinks = await homePage.navLinks;
    //verify nav links text
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    //if I want to chech if the third element has a text BLOG, then I should do so
    //const navLinks = await page.locator('#zak-primary-menu li[id*=menu]').nth(3)
    //expect(await navLinks.textContents()).toEqual(expectedLinks[3]);
   //now if we want to print out all the links, we have too LOOP into each - FOROF loop
   //for (const el of await navLinks.elementHandles()) {
    //console.log(await el.textContent())
   //}

})
})