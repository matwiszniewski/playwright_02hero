import {test} from "../fixtures/base"
import { data } from "../helpers/data";

test("test", async ({mainPage, loginPage, registerPage})=> {
    await mainPage.openMainPage();
    await mainPage.gotoUserRegister();
    await registerPage.clickContinue();
    await registerPage.fillInRegisterForm(data.firstName, data.lastName, data.address1, data.city, data.company, data.countryId, data.email, data.fax, data.loginName, data.password,data.passwordConfirm, data.telephone, data.zipCode, data.zoneId)
    //await registerPage.
})