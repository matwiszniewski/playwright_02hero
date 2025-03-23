import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import { RegisterPage } from "../pages/register.page";

type Fixtures = {
  loginPage: LoginPage;
  mainPage: MainPage;
  registerPage: RegisterPage
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

});