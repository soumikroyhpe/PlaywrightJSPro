import { test, expect } from '@playwright/test'

test('AssertionTest', async ({ page }) => {

    //Open url
    await page.goto('https://www.saucedemo.com/');

    // 1. page level assertion
    //Verify page title
    await expect(page).toHaveTitle('Swag Labs')

    //Verify page url
    await expect(page).toHaveURL(/saucedemo/)

    //2.Element state assertion 
    const usernameInput = page.getByPlaceholder('Username')
    const passwordInput = page.getByPlaceholder('Password')
    const loginBtn = page.locator('.submit-button')
    const errorMessage = page.locator('.error-message-container')

    //verify input field username and password are visible
    //Verify if webelements are enabled and editable

    await expect(usernameInput).toBeVisible();
    await expect(usernameInput).toBeEditable();

    await expect(passwordInput).toBeVisible();

    await expect(loginBtn).toBeVisible();


    //Attribute - Assertions
    await expect(usernameInput).toHaveAttribute('placeholder', 'Username')
    await expect(loginBtn).toHaveAttribute('type', 'submit')


    //3. text & value Assertions

    await usernameInput.fill('standard_user');
    await expect(usernameInput).toHaveValue('standard_user')
    await passwordInput.fill('secret_sauce');
    await expect(passwordInput).toHaveValue('secret_sauce')

    await expect(errorMessage).toBeVisible()


    await loginBtn.click()


    //page and text assertion after login
    await expect(page).toHaveURL(/inventory.html/);

    //verify products page heading
    const productTitle = page.locator('.title')

    await expect(productTitle).toBeVisible()

    //Verify full text
    await expect(productTitle).toHaveText('Products')

    await expect(productTitle).not.toHaveText('Prod')

    //Verify partial text
    await expect(productTitle).toContainText('Prod')


    //class assertion
    await expect(productTitle).toHaveClass('title')

    //ID assertion - verify shoping cart id value = "shopping_cart_container"
    const cartIcon = page.locator('.shopping_cart_container')
    await expect(cartIcon).toHaveId('shopping_cart_container')


    //COUNT - ASSERTION
    //Verify Total number of products displayed
    const productItems = page.locator('.inventory_item_name')
    await expect(productItems).toHaveCount(6)


    //Screenshot / Visual Assertions
    const bagItem = page.getByAltText('Sauce Labs Backpack')

    //compare screenshot with baseline screenshot
    await expect(bagItem).toHaveScreenshot('bagItem.png')


    //To update snapshot in the dir for first time.
    //npx playwright test Assertions.spec.js --update-snapshots --project=chromium --headed
    //Next Run -- npx playwright test Assertions.spec.js --project=chromium --headed


    //Visual verification of shoping cart -- dynamic image
    await expect(page).toHaveScreenshot('cartIcon.png',{mask: [page.locator('.shopping_cart_link')]

    })




    await page.pause()

})