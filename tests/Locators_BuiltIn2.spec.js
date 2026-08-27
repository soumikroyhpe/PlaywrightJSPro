import {test, expect} from '@playwright/test'

test('BuiltIn locators-Practice',async({page})=>{

    await page.goto(' https://practice.expandtesting.com/login')

   // https://practice.expandtesting.com/login

   //getByLabel() - username
    await page.getByLabel('username').fill('practice');

       //getByLabel() - password
    await page.getByLabel('password').fill('SuperSecretPassword!');

    //getByRole() - Login
    await page.getByRole('button',{name : 'Login'}).click()


    //getByText() - Verify/Assertion
    await expect(page.getByText('You logged into a secure area!')).toBeVisible()

    await page.getByRole('link',{name : 'Home'}).click()
    await page.pause();

})