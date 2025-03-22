import { test, expect } from "@playwright/test";
import 'dotenv/config'

test("basics", async ({ page }) => {
  await test.step("Checking the first checkbox", async () => {
    await page.goto("/checkboxes");
    const checkbox1 = page.getByRole("checkbox").first();
    await expect(checkbox1).toBeVisible();
    await expect(checkbox1).not.toBeChecked();
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

  })
  await test.step("Checking page header", async () => {

  const classExample = page.locator(".example");
  await expect(classExample).toBeVisible();
  });
});

test("basics2", async ({ page }) => {
  await page.goto("/checkboxes");
  const checkbox2 = page.getByText(" checkbox 2");
  await expect(checkbox2).toBeVisible();
});

test("Checkbox checked", async ({ page }) => {
  await page.goto("/checkboxes");
  const checkbox = page.getByRole("checkbox").last();
  await expect(checkbox).toBeChecked();
});


test.only("Basic test for fill inputs", async ({page}) => {
  await test.step("Open login page", async () => {
    await page.goto("/login");
    const classExample = page.locator(".example");
    await expect(classExample).toBeVisible();
    await expect(classExample).toContainText("This is where you can log into the secure area");
  })

  await test.step("Fill login inputs -name", async () => {
    const userNameInput = page.locator("#username")
    await userNameInput.fill(process.env.USER as string);
    await expect(userNameInput).toHaveValue(process.env.USER as string)
  })  

  await test.step("Fill login inputs -password", async () => {
    const userPasswordInput = page.locator("#password")
    await userPasswordInput.fill(process.env.PASSWORD as string);
    await expect(userPasswordInput).toHaveValue(process.env.PASSWORD as string)
  }) 

  await test.step("Login the user", async () => {
    const loginButton = page.getByRole("button")
    await expect(loginButton).toBeVisible
    await loginButton.click();
    await page.waitForTimeout(5000)
    const subHeaderSuccess = page.getByText("You logged into a secure area!")
    await expect(subHeaderSuccess).toBeVisible
    const logoutButton = page.locator("/logout")
    await expect(logoutButton).toBeVisible
  })

})

test("Basic test for dropdown lists", async ({page}) =>{
  await test.step("dropdown", async () => {
    await page.goto("/dropdown");
    const dropdown = page.locator('#dropdown')
    //await dropdown.click()
    await dropdown.selectOption("1")

    await page.waitForTimeout(5000)
    await expect(dropdown).toContainText("Option 1")
    //await expect(dropdown).tobe
    
  })

})
  
  
  