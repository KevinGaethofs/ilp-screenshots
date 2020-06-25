const puppeteer = require('puppeteer');

var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
  (async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://instantlandpages.com/page/' + val);
    await page.screenshot({path: 'screenshots/' + val + '.png'});

    await browser.close();
  })();
});
