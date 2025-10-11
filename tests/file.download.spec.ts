import {test} from "../fixtures/base"
import { data, url, basicUser } from "../helpers/data";
import path from "path";



test('download file', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'random_data.txt' }).click();
  const download = await downloadPromise;

  const helpersDir = path.join(process.cwd(),"helpers");
  const filePath = path.join(helpersDir, download.suggestedFilename());
  await download.saveAs(filePath);

  
});