import { Page, expect, Locator } from "@playwright/test";

export class LoginUser {
    regiserLoginUser: Locator;
    accountLogin: Locator;
    loginName: Locator;
    loginPassword: Locator;
    loginButton: Locator;
    myAccountTitle: Locator;
  
    constructor(protected page: Page) {
      this.regiserLoginUser = this.page.getByRole('link', { name: 'Login or register' })
      this.accountLogin = this.page.getByText('Account Login', { exact: true });
      this.loginName = this.page.locator('#loginFrm_loginname');
      this.loginPassword = this.page.locator('#loginFrm_password');
      this.loginButton = this.page.getByRole('button', { name: 'Login' })
      this.myAccountTitle = this.page.locator('h1').getByText('My Account')
    }
  
    async goToLoginUser(): Promise<void> {
        await this.regiserLoginUser.click();
        await expect(this.accountLogin).toBeVisible();
        await this.page.waitForTimeout(2000);
      }

      async loginUser(userLogin:string, userPassword:string): Promise<void> {
        await this.loginName.fill(userLogin)
        await this.loginPassword.fill(userPassword)
      }

      async clickSubmit(): Promise<void> {
        await this.loginButton.click()
        await this.page.waitForTimeout(2000);
      }

      async checkUserLoggedIn(): Promise<void> {
        await expect(this.myAccountTitle).toBeVisible;
        await this.page.waitForTimeout(2000);
      }

    }