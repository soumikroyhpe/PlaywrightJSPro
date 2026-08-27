import {test,expect} from '@playwright/test'

test('Locators', async({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user')

    await page.locator('#password').fill('secret_sauce')

    await page.locator('.submit-button').click()

    await expect(page).toHaveURL(/inventory.html/);

    /////////FIRST APPROACH//////////////////

    //find list of all products 
    const productNames = await page.$$('.inventory_item_name')

   //count products
    const count = productNames.length;
    console.log('Total no. of products: ',count)

   //loop through each element and print the product name
    for(const product of productNames) {
        const name = await product.textContent(); //fetching text from an element
        console.log(name)
   }


   //////////// SECOND APPROACH -- Best Approach///////////////////

   //locate all product names

   const productNames_1 = page.locator('.inventory_item_name')

   //get total count
   const count1 = await productNames_1.count() 
   console.log('Total products: ',count1)

   //print each product name
   for(let i = 0; i < count; i++){
    const name_1 = await productNames_1.nth(i).textContent()
    console.log(name_1)
   }



    await page.pause();
})