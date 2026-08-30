import { test, expect } from '@playwright/test'

test('CheckBoxAndRadioBtn Test', async ({ page }) => {

    test.setTimeout(60000); //******** This timeout works for this test only ****

    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html', { waitUntil: 'domcontentloaded' })


    //######################## RadioButton ##########################
    const radioBtn3 = page.locator('#exp-2')
    await radioBtn3.check()

    //Verify Radio Button is checked
    await expect(radioBtn3).toBeChecked()

    //verify if radio button is checked
    expect(await radioBtn3.isChecked()).toBeTruthy()


    // waitForTimeout is same as thread.sleep(2000)
    await page.waitForTimeout(2000)

    //################### CheckBox ##############################

    const uftCheckBox = page.locator('#tool-0')
    const protractorCheckBox = page.locator('#tool-1')
    const seleniumCheckBox = page.locator('#tool-2')
    
        await uftCheckBox.check() // check or select uft checkbox
    
        //Verify UFT checkbox is selected
        await expect(uftCheckBox).toBeChecked()
    
         //Verify Protractor checkbox is selected
        await expect.soft(protractorCheckBox).toBeChecked()
    
         //Verify Selenium checkbox is selected
        await expect.soft(seleniumCheckBox).not.toBeChecked()
    
    

    //$$$$$$$$$$$$$$$$ for loop - select all checkboxes $$$$$$$$$$$$$$$$$$$$$$$$$$$$

    const checkBoxes = [uftCheckBox,protractorCheckBox,seleniumCheckBox];

    for (const checkbox of checkBoxes) {
        // check (select) the checkbox
        await checkbox.check()

        //verify checkbox is checked
        await expect(checkbox).toBeChecked()
    }

    await page.pause()

})