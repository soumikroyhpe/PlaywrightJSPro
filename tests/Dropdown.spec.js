import { test, expect } from '@playwright/test'

test('Dropdown', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dropdown')


    //locate dropdown
    const countryDropdown = page.locator('#country')
    // Way to select option
    //################  1. By using label ####################
    await countryDropdown.selectOption({ label: 'India' }) // add visible text


    await expect(countryDropdown).toHaveValue('IN')

    //#################### 2. By using value #################
    await countryDropdown.selectOption({ value: 'IM' }) // add value


    await expect(countryDropdown).toHaveValue('IM')


     //#################### 3. By index #################

    await countryDropdown.selectOption({index:1}) //select  2nd option
    const selectedValue = await countryDropdown.inputValue();

    expect(selectedValue).not.toBe('')

    //############# Assertion-1 validate number of options #################
    const options = countryDropdown.locator('option')

    //Count how many options are present in the dropdown
    const optionCount = await options.count();
    console.log(optionCount)

    //Assert that the dropdown contains more than 200 options
    //This validates that the dropdown is properly populated 
    expect(optionCount).toBeGreaterThan(200)


    //################## Assertion 2 : validate presence of value ##############

    //Retrieve the visible text of all <option> element in the dropdown
    //This returns an array of country names as strings
    const allcountries = await options.allTextContents();

    //Verify that "India" is present in the dropdown options
    expect(allcountries).toContain('India')

    await page.pause()
})