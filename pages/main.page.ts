import { Page, expect, Locator } from "@playwright/test";
import { data } from "../helpers/data";

export class MainPage {
  titlePage: string;
  regiserLoginUser: Locator;
  accountLogin: Locator;
  makeupTab: Locator;
  categoryFace: Locator;
  categoryNails: Locator;
  titleNailsPage: Locator;

  constructor(protected page: Page) {
    this.titlePage = "A place to practice your automation skills!";
    this.regiserLoginUser = this.page.getByRole('link', { name: 'Login or register' })
    this.accountLogin = this.page.getByText('Account Login', { exact: true });
    this.makeupTab = this.page.getByRole('link', { name: 'Makeup' })
    this.categoryFace = this.page.locator('#categorymenu').getByRole('link', { name: 'Face' })
    this.categoryNails = this.page.locator('#categorymenu').getByRole('link', { name: 'Nails' })
    this.titleNailsPage = this.page.locator('#maincontainer').getByText('Nails', { exact: true })
  }

  async openMainPage(url:string): Promise<void> {
    await this.page.goto(url)
    await expect(this.page.title()).resolves.toEqual(this.titlePage);
  }


  async gotoUserRegister(): Promise<void> {
    await this.regiserLoginUser.click();
    await expect(this.accountLogin).toBeVisible();
    await this.page.waitForTimeout(5000);
  }
  
  async hoverOverProducts(): Promise<void> {
    await this.makeupTab.hover();
    await expect(this.categoryFace).toBeVisible();
    await this.page.waitForTimeout(2000);
  }

  async chooseCategoryNails(): Promise<void> {
    await this.makeupTab.hover();
    await this.categoryNails.click();
    await this.page.waitForTimeout(2000);
    await expect(this.titleNailsPage).toBeVisible()
  }


}


