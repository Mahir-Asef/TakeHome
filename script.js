const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const chrome = require("selenium-webdriver/chrome");
async function testRun() {
    const productName = "Nike react phantom run flyknit 2";
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    // await driver.findElement(By.className("search-icon")).click();
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("nike");
    console.log("show my cart");
    // await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("nike",Key.ENTER);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    await driver.findElement(By.xpath(`//a[contains(@href,'182')]/span[contains(text(),'${productName}')]`)).click();
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'S')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'Black')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//input[@name='qty']")).clear();
    await driver.findElement(By.xpath("//input[@name='qty']")).sendKeys(2);
    await driver.findElement(By.xpath("//button[contains(.,'ADD TO CART')]")).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath("//a[@class='add-cart-popup-button']")).click();
    
    await driver.sleep(5000);
    await driver.quit();
}
testRun();