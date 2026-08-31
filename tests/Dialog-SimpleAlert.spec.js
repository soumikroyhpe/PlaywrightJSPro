import { test, expect } from '@playwright/test'

test("SimpleAlterHandling", async ({ page }) => {

    //Step1: open url
    await page.goto("https://qaautomationlabs.com/testing/javaScript-alert.php")

    //Step2: we must register the dialog handler before clicking the button
    //once means this handler will run only one time
    page.once('dialog', async dialog => {

        //check what type of dialog it is (alert/confirm/prompt)
        expect(dialog.type()).toBe('alert');

        //Read te message shown inside the alert popup
        expect(dialog.message()).toContain('This is an alert message!')

        await page.waitForTimeout(2000)

        //click OK button on the alert
        await dialog.accept()
    })

    //Step3: click the button that opens the alert popup
    await page.getByRole('button',{name : 'Show Alert'}).click()

    //step4: verify that alert was handled successfully
    await expect(page.getByText('Alert shown.')).toBeVisible()

    await page.pause()

})