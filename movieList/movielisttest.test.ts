import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/')
})

afterAll(async () => {
    await driver.quit()
})

test('add movie', async() => {
    let movieBar = await driver.findElement(By.name('add-movie'))
   // await driver.sleep(2000);
    await movieBar.sendKeys('Rugrats in paris')
    await driver.sleep(2000)
    await driver.findElement(By.name('button')).click();
    await driver.sleep(5000);
});

test('add movie', async() => {
    let movieBar = await driver.findElement(By.name('add-movie'))
    //await driver.sleep(2000);
    await movieBar.sendKeys('The conjuring')
    await driver.sleep(2000)
    await driver.findElement(By.name('button')).click();
    await driver.sleep(5000);
});

test('delete movie', async() => {
    let Input = await driver.findElement(By.id('${input}'))
    //await driver.sleep(2000);
   // await movieBar.sendKeys('The conjuring')
   // await driver.sleep(2000)
    await driver.findElement(By.id('The Conjuring')).click();
    await driver.sleep(5000);
})