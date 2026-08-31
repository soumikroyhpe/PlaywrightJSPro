import { test, expect } from '@playwright/test'

test("ConfirmAlterHandling", async ({ page }) => {

    //Step1: open url
    await page.goto("https://qaautomationlabs.com/testing/javaScript-alert.php")

    //Step2: we must register the dialog handler before clicking the button

    //once means this handler will run only one time
    //Listen for the confirmation dialog
    page.once('dialog', async dialog => {

        //check what type of dialog it is (alert/confirm/prompt)
        expect(dialog.type()).toBe('confirm');

        //Read te message shown inside the alert popup
        expect(dialog.message()).toContain('Do you confirm this action?')

        await page.waitForTimeout(2000)

        //click OK button on the alert
        await dialog.accept()

        //to click cancel instead, we would use
        //await dialog.dismiss()
    })

    //Step3: click the button that opens the alert popup
    await page.getByRole('button', { name: 'Show Confirm' }).click()

    //step4: verify that alert was handled successfully
    await expect(page.getByText('You clicked OK on confirm button.')).toBeVisible()

    await page.pause()

})