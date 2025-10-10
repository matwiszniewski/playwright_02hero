import {test} from "../fixtures/base"
import { data, url, basicUser } from "../helpers/data";
import "dotenv/config";

test.skip("Register user", async ({mainPage, registerPage})=> {
    await mainPage.openMainPage(url.urlAutomationStore);
    await mainPage.gotoUserRegister();
    await registerPage.clickContinue();
    await registerPage.fillInRegisterForm(data.firstName, data.lastName, data.email,data.telephone,data.fax,data.company,data.address1, data.city, data.zipCode, data.loginName, data.password,data.passwordConfirm, data.zoneId, data.countryId)
})


test("Login user", async ({mainPage, loginUser })=> {
    await mainPage.openMainPage(url.urlAutomationStore);
    await loginUser.goToLoginUser()
    await loginUser.loginUser(process.env.BASIC_USER_LOGIN as string, process.env.BASIC_USER_PASSWORD as string)
    await loginUser.clickSubmit()
    await loginUser.checkUserLoggedIn()
    await mainPage.hoverOverProducts()
    await mainPage.chooseCategoryNails()
})


