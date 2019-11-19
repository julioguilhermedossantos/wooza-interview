const puppeteer = require("puppeteer");

const now = new Date();
const formatted = now.toLocaleTimeString();
describe("Exibição dos cards", () => {
  test("Deve renderizar seis cards dentro do container", async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      },
      userAgent: ""
    });

    await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });

    const container = await page.$eval(".container ", el => !!el);
    const cards = await page.$$(".card");
    expect(container).toBe(true);
    expect(cards.length).toBe(6);
    browser.close();
  }, 30000);
});
describe("Exibição mobile", () => {
  test("Deve renderizar um card por linha", async () => {
    let browser = await puppeteer.launch({
      headless: true
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 440,
        height: 600
      },
      userAgent: ""
    });
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });

    await page.screenshot({
      path: `./src/modules/User/view/snapshot/${formatted}-mobile-UserProfileCards.png`,
      fullPage: true
    });
    browser.close();
  }, 30000);
});
describe("Exibição desktop", () => {
  test("Deve renderizar três cards por linha", async () => {
    let browser = await puppeteer.launch({
      headless: true
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      },
      userAgent: ""
    });
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });

    await page.screenshot({
      path: `./src/modules/User/view/snapshot/${formatted}-desktop-UserProfileCards.png`,
      fullPage: true
    });
    browser.close();
  }, 30000);
});
