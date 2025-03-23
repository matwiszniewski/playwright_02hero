import { Page, expect, Locator } from "@playwright/test";

export class RegisterPage {
    continueButton: Locator;
    loginInput: Locator;
    createAccount: Locator;
    titlePage: string;
    firstName: Locator;
    lastName: Locator;
    email: Locator;
    telephone: Locator;
    fax: Locator;
    company: Locator;
    address1: Locator;
    city: Locator;
    region: Locator;
    zipCode: Locator;
    country: Locator;
    loginName: Locator;
    password: Locator;
    passwordConfirm: Locator;
    subscribe: Locator;
    submitForm: Locator;


  
    constructor(protected page: Page) {
      this.continueButton = this.page.getByRole('button', { name: 'Continue'})  
      this.loginInput = this.page.locator("#loginFrm_loginname");
      this.titlePage = "A place to practice your automation skills!";
      this.createAccount = this.page.getByText('Create Account');
      this.firstName = this.page.locator('#AccountFrm_firstname');
      this.lastName = this.page.locator('#AccountFrm_lastname');
      this.email = this.page.locator('#AccountFrm_email');
      this.telephone = this.page.locator('#AccountFrm_telephone')
      this.fax = this.page.locator('#AccountFrm_fax');
      this.company = this.page.locator('#AccountFrm_company');
      this.address1 = this.page.locator('#AccountFrm_address_1');
      this.city = this.page.locator('#AccountFrm_city')
      this.region = this.page.locator('#AccountFrm_zone_id');
      this.zipCode = this.page.locator('#AccountFrm_postcode')
      this.country = this.page.locator('#AccountFrm_country_id')
      this.loginName = this.page.locator('#AccountFrm_loginname')
      this.password = this.page.locator('#AccountFrm_password')
      this.passwordConfirm = this.page.locator('#AccountFrm_confirm')
      this.subscribe = this.page.getByRole('radio', { name: 'No' })
      this.submitForm = this.page.getByRole('button', { name: ' Continue' })
    }

    async clickContinue(): Promise<void> {
        await this.continueButton.click();
        await expect(this.createAccount).toBeVisible();
        await this.page.waitForTimeout(5000);
      }

    async fillInRegisterForm(firstName:string, lastName:string, email:string,telephone:string, fax:string, company: string, address1:string, city: string, zipCode: string, loginName: string, password:string, passwordConfirm:string, zoneId:string, countryId: string): Promise<void> {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.fax.fill(fax);
        await this.company.fill(company);
        await this.address1.fill(address1);
        await this.city.fill(city);
        await this.country.selectOption(countryId);
        await this.region.selectOption(zoneId);
        await this.zipCode.fill(zipCode);
        await this.loginName.fill(loginName);
        await this.password.fill(password);
        await this.passwordConfirm.fill(passwordConfirm);
        await this.subscribe.check();
        await this.submitForm.click()
        await this.page.waitForTimeout(5000);
      }

}