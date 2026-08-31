import { test, expect } from '@playwright/test'
import path from 'path';


test('iFrameHandling', async ({ page }) => {


    //open url

    const filePath = path.join(
        process.cwd(),
        'DemoHTMLDocs',
        'IframePractice',
        'index.html'
    );


    await page.goto(`file://${filePath}`);

    //count total ifram
    const allFrame = page.frames()

    console.log("total number of frames: ", allFrame.length)

    //################ Approach 1: Framelocator (Recommended -- Because of Auto wait) ######################
    
    const leftFrame = page.frameLocator("iframe[name='leftFrame']")

    //locate name webelement
    await leftFrame.locator("input[name='name']").fill("Soumik Roy")

    await leftFrame.locator("input[name='email']").fill("Test@test.com")

    //################ Approach 2: Locate Right Frame ######################

    const rightFrame = page.frame('rightFrame')
    rightFrame.locator('#options').selectOption({label : 'Option Two'})
    rightFrame.getByText("Click Me").click()
    await page.pause()


})