import {test,expect} from '@playwright/test'


test('BuiltIn locators-Saucedemo',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click() //  name: is visible text in DOM
    
    await expect(page).toHaveURL(/inventory.html/)


    //getByText() - Verify product visibility on inventory page 
    await expect(page.getByText('Products')).toBeVisible();


    //we have many 'Add to cart' button, we need to select first
    //getByRole() - Add product sauce lab backpack to cart
    await page.getByRole('button',{name : 'Add to cart'}).first().click()

    //getByAltText() - click on sauce lab backpack product to view desc
    await page.getByAltText('Sauce Labs Backpack').click()

    await page.pause();

})