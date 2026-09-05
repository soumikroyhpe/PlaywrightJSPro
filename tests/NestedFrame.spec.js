import { test, expect } from '@playwright/test'
import path from 'path';


test('NestedFrameDemo', async ({ page }) => {


    //open url
    const filePath = path.join(
        process.cwd(),
        'DemoHTMLDocs',
        'nested-frame.html'
    );

    await page.goto(`file://${filePath}`);
    //await page.goto('file:///C:/Soumik_Roy/FrameworkDesign/PlaywrightJSPro/DemoHTMLDocs/nested-frame.html')

    //Step2 : Switch to parent frame
    const parentFrame = page.frame('parentFrame')

    //Verify parent frame text to be visible
    await expect(parentFrame.locator("//p[contains(text(),'This is the parent frame.')]")).toBeVisible();


    // Switch to child frame and verify child text
    const childFrame = parentFrame.frameLocator("iframe[name='childFrame']")

    // locate child text on childframe and verify child text
    const childFrameText = await childFrame.locator("#childText").innerText()
    expect(childFrameText).toBe('This is a nested (child) frame.')

    await page.pause();


})