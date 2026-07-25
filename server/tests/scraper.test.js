const axios = require("axios");
const scrapePage = require("../utils/scraper");

jest.mock("axios");

describe("Page Pulse Scraper Tests", () => {

    test("Happy Path - parses HTML correctly", async () => {

        axios.get.mockResolvedValue({
            status: 200,
            headers: {
                "content-type": "text/html"
            },
            data: `
                <html>
                    <head>
                        <title>Test Page</title>
                        <meta name="description" content="Sample Description">
                    </head>
                    <body>
                        <h1>Hello</h1>
                        <img src="one.jpg">
                        <img src="two.jpg" alt="Logo">
                        <p>This is a sample page.</p>
                    </body>
                </html>
            `
        });

        const result = await scrapePage("https://example.com");

        expect(result.statusCode).toBe(200);
        expect(result.title).toBe("Test Page");
        expect(result.metaDescription).toBe("Sample Description");
        expect(result.h1Count).toBe(1);
        expect(result.imagesWithoutAlt).toBe(1);
    });

    test("Failure Case - Non HTML response", async () => {

        axios.get.mockResolvedValue({
            status: 200,
            headers: {
                "content-type": "application/json"
            },
            data: {}
        });

        await expect(
            scrapePage("https://example.com")
        ).rejects.toThrow("URL does not contain HTML content");

    });

    test("Failure Case - Timeout", async () => {

        axios.get.mockRejectedValue(
            new Error("timeout")
        );

        await expect(
            scrapePage("https://example.com")
        ).rejects.toThrow("timeout");

    });

});