const{test,expect} = require('@playwright/test');

test('Open Google page and check title',async({page})=>
{
   await page.goto("https://www.google.com", {waitUntil:"load"});
   const pageTitle =await page.title()
   console.log("page title is : ",pageTitle)
   

    const pageURL = page.url()
    console.log("page url is : ",pageURL)

    await expect(page).toHaveTitle('Google');
})