import { Page, expect, Locator } from "@playwright/test";

export class MainPage {
  titlePage: string;
  regiserLoginUser: Locator;
  accountLogin: Locator;

  constructor(protected page: Page) {
    this.titlePage = "A place to practice your automation skills!";
    this.regiserLoginUser = this.page.getByRole('link', { name: 'Login or register' })
    this.accountLogin = this.page.getByText('Account Login', { exact: true });
  }

  async openMainPage(): Promise<void> {
    await this.page.goto("https://automationteststore.com/")
    await expect(this.page.title()).resolves.toEqual(this.titlePage);
  }


  async gotoUserRegister(): Promise<void> {
    await this.regiserLoginUser.click();
    await expect(this.accountLogin).toBeVisible();
    await this.page.waitForTimeout(5000);
  }
}