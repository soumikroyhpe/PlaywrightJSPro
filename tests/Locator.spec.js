import {test, expect} from '@playwright/test';

test('Locators', async({page})=>{

   await page.goto('https://www.saucedemo.com/');

   await page.locator('#user-name').fill('standard_user')

   await page.locator('#password').fill('secret_sauce')

   await page.locator('.submit-button').click()
   
  // page.waitForLoadState

   await expect(page).toHaveURL(/inventory.html/); //verify url
   const productElement = page.locator('.title')
   await expect(productElement).toHaveText('Products') // we can use "toContainText" here

   await expect(productElement).toBeVisible()// verify web element visibility 
   await page.pause()

})
