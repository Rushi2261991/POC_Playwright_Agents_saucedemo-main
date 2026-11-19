const { chromium } = require('playwright');
(async() => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com');
  const inputs = await page.locator('input').evaluateAll((els) => els.map((el) => ({
    type: el.getAttribute('type'),
    name: el.getAttribute('name'),
    id: el.getAttribute('id'),
    dataset: el.getAttribute('data-test')
  })));
  console.log(JSON.stringify(inputs, null, 2));
  await browser.close();
})();
