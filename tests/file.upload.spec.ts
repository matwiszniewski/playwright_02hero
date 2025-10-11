import {test} from "../fixtures/base"
import { data, url, basicUser } from "../helpers/data";
import path from "path";



test("File upload", async ({page })=> {
await page.goto("https://automationtesting.co.uk/fileupload.html");
const fileChooserPromise = page.waitForEvent('filechooser');
await page.locator('#fileToUpload').click();
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles("helpers/test.txt");
await page.getByRole("button",{ name: "submit"}).click();
});



// nieskończony test