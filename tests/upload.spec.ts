import { test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";
import { TIMEOUT } from "dns";
import path from 'path';
test.describe('Upload file', () => {
        let cartPage: CartPage;
        const fileName = ['23.jpg', 'big-size-doc.pdf']
//execute the test going into the loop and filling the too documents
        for (const name of fileName){
test(`Should upload a ${name}  file`, async ({ page }) => {
        //open url
        cartPage=new CartPage(page);
await page.goto('https://practice.sdetunicorns.com/cart/');
        //provide test file path
const filePath = path.join(__dirname,` ../data/%{name}`);
        //upload test file
await page.setInputFiles('input#upfile_1', filePath);
        //click the submit button
await page.locator('#upload_1').click();
        //assertion 
        await expect(page.locator('#wfu_messageblock_header_1_label_1'))
        .toContainText('uploaded successfully');
    })

        }
    
     test('Should upload a hidden test file', async ({ page }) => {
        //open url
await page.goto('https://practice.sdetunicorns.com/cart/');
        //provide test file path
const filePath = path.join(__dirname, '../data/23.jpg');

//Dom manupulation

await page.evaluate(() => {
    const selector = document.querySelector('input#upfile_1');
    if (selector){
        selector.className = ''
    }

})
        //upload test file
//await page.setInputFiles('input#upfile_1', filePath);
        //click the submit button
//await page.locator('#upload_1').click();
cartPage.uploadComponent().uploadFile(filePath)


        //assertion 
        await expect(cartPage.uploadComponent().successTxt)
        .toContainText('uploaded successfully');
    })
    test('Should upload a test file with bigger size to test AWAIT function', async ({ page }) => {
        //open url
await page.goto('https://practice.sdetunicorns.com/cart/');
        //provide test file path
const filePath = path.join(__dirname, '../data/big-size-doc.pdf');
        //upload test file
await page.setInputFiles('input#upfile_1', filePath);
        //click the submit button
await page.locator('#upload_1').click();

//1. Hardcoded Wait: hardcored sleep - WRONG way - this way the test takes 11 sec
//  to be completed. Always
//await page.waitForTimeout(5000);

//2. Conditional wait -Wait for condition. Here we will wait until the element is 
//visible or hidden, or something else. We dont have to wait 5 secs

//await page.locator('#wfu_messageblock_header_1_label_1')
//.waitFor({ state: 'visible', timeout: 10000})

        //assertion 
        //3.assertion wait, thats the wait described in the playwright config
         // we can add a specific assertion timeout 
       // await expect(page.locator(('#wfu_messageblock_header_1_label_1')))
      //  .toContainText('uploaded successfully', {timeout: 10000});
      await expect (cartPage.uploadComponent().successTxt)
    })
})
