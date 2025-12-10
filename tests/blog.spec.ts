import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";
test.describe('Blog', () => {
    let blogPage: BlogPage;
    test('Verify recent posts count and verify the lenght of each listed item', async ({ page }) => {
        blogPage=new BlogPage (page);
    //open blog  page
   // await page.goto("https://practice.sdetunicorns.com/blog");
      await blogPage.navigate()
//get the recent post list emails
//const recentPostList = page.locator('#recent-posts-3 ul li')
//const recentPostList = await blogPage.recentPostList;
// id-# .class
//loop through the list and assert the char length >10
for (const el of await blogPage.recentPostList.elementHandles()) {
    expect(((await el.textContent())!.trim()).length).toBeGreaterThan(10)

}
//assert the total length = 5
expect(await blogPage.recentPostList.count()).toEqual(5)
})
})
