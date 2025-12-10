import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import {faker} from '@faker-js/faker';
test.describe('Contact', () => {
      let contactPage: ContactPage;
    test('Fill contact form and verify success message', async ({ page }) => {
           contactPage=new ContactPage(page);
        
           //open contact page
    //await page.goto("https://practice.sdetunicorns.com/contact");
     await contactPage.navigate()
     await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2));
    //npx eslint tests - show ne everything from my tests that is wrong

    //fill out the input fields
    //await page.locator('.contact-name input').fill('Vanya')
     //await page.locator('.contact-email input').fill('test@abv.bg')
      //await page.locator('.contact-phone input').fill('123456789')
      //wait page.locator('.contact-message textarea').fill('Hello')
       //adding a soft assertion. We add it and evein if it fails, the test will continue
      // await expect.soft(page.locator('.contact-message textarea')).toHaveText('wrong text')
    //click submit
    //markiram shift +""
//ait page.locator('button[type=submit]').click()
//if I want to be sure that after some failed soft assertions I want my test
//to fail, I can add this:i expect the errors to be less than 1

//expect(test.info().errors.length).toBeLessThan(2)
    //verify success message
    //await page.pause() - the inspector will be opened here
   //onst successAlert = page.locator('div[role="alert"]')
   await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly')

})


})
