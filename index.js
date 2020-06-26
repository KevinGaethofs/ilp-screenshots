const puppeteer = require('puppeteer');

var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
  (async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({
    width: 1200,
    height: 1080
    })
    await page.goto('https://instantlandpages.com/page/' + val);
    await page.screenshot({path: 'screenshots/' + val + '.jpg'});

    await browser.close();
  })();
});
