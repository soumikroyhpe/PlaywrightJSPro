import { test, expect } from '@playwright/test'

test("PromptAlterHandling", async ({ page }) => {

    //Step1: open url
    await page.goto("https://qaautomationlabs.com/testing/javaScript-alert.php")

    //Step2: we must register the dialog handler before clicking the button

    //once means this handler will run only one time
    //Listen for the Prompt dialog
    page.once('dialog', async dialog => {

        //check what type of dialog it is (alert/confirm/prompt)
        expect(dialog.type()).toBe('prompt');

        //Read te message shown inside the alert popup
        expect(dialog.message()).toContain('What is your name?')

        await page.waitForTimeout(2000)

        //verify default text inside prompt input box
        //expect(dialog.defaultValue()).toBe('change me')

        //Enter value :Soumik Roy and click ok
        await dialog.accept('Soumik Roy')


        //to click cancel instead, we would use
        //await dialog.dismiss()
    })

    //Step3: click the button that opens the alert popup
    await page.getByRole('button', { name: 'Show Prompt' }).click()

    //step4: verify that alert was handled successfully
    await expect(page.getByTestId('alert-output')).toContainText('Soumik Roy')

    await page.pause()

})