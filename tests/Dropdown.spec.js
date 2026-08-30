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

    await page.pause()
})