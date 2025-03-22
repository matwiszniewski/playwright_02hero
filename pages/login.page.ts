import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  loginInput: Locator;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
  }

  async fillLoginInputs(userName: string, password: string): Promise<void> {}
  //
  async clickLoginButton(): Promise<void> {
    //
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }
}