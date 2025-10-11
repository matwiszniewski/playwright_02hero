import { test, expect } from "@playwright/test";
 
test("mock BookStore API response", async ({ page }) => {
  await page.route("https://demoqa.com/BookStore/v1/Books", async (route) => {
    const mockResponse = {
      books: [
        {
          isbn: "9781449325862",
          title: "Git Pocket Guide",
          subTitle: "A Working Introduction",
          author: "Richard E. Silverman",
          publish_date: "2022-01-25T13:44:50.276Z",
          publisher: "O'Reilly Media",
          pages: 234,
          description: "Pocket guide for Git.",
          website:
            "https://www.oreilly.com/library/view/git-pocket-guide/9781449325862/",
        },
        {
          isbn: "9781491904244",
          title: "Learning JavaScript Design Patterns",
          subTitle: "A JavaScript and jQuery Developer's Guide",
          author: "Addy Osmani",
          publish_date: "2022-01-25T13:44:50.276Z",
          publisher: "O'Reilly Media",
          pages: 254,
          description: "Design patterns for JavaScript developers.",
          website:
            "https://www.oreilly.com/library/view/learning-javascript-design/9781491904244/",
        },
      ],
    };
 
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(mockResponse),
    });
  });
 
  await page.goto("https://demoqa.com/books");
 
  await expect(page.locator("text=Git Pocket Guide")).toBeVisible();
  await expect(
    page.locator("text=Learning JavaScript Design Patterns")
  ).toBeVisible();
  await page.pause();
});