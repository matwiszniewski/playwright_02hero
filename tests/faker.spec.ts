import { test, expect } from "@playwright/test";
import {faker} from "@faker-js/faker"

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email(); 
const userName = randomName
const userEmail = randomEmail

test("faker", async ({page}) => { 
    console.log(userName +" " + userEmail)
})

test("faker check", async ({page}) => { 
    console.log(userName +" " + userEmail)
})
