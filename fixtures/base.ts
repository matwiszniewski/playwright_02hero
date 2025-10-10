import { test as base } from "@playwright/test";
import { MainPage } from "../pages/main.page";
import { RegisterPage } from "../pages/register.page";
import { LoginUser } from "../pages/loginUser.page";

type Fixtures = {
  mainPage: MainPage;
  registerPage: RegisterPage
  loginUser: LoginUser
};

export const test = base.extend<Fixtures>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginUser: async ({ page }, use) => {
    await use(new LoginUser(page));
  },

});