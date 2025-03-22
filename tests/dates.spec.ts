import { test, expect } from "@playwright/test";
import dayjs from "dayjs";

test("dates", async ({page}) => { 
    const todaysDate = dayjs()
    let plus7days = todaysDate.add(7,'day')
    console.log(plus7days.format("DD/MM/YYYY"))
})