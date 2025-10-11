import { expect, request, test } from "@playwright/test";
import { api, userID } from "../helpers/data";
import "dotenv/config";

let user = ""
let token: string;

test.describe.configure({mode:"serial"}); //1worker in this file, no parallel tests

test.beforeAll("Generate token", async ({ request }) => {
    const response = await request.post(api +"/Account/v1/GenerateToken", {
        data:{
            "userName": process.env.API_USER,
            "password": process.env.API_USER_PASSWORD
          }
    })
    const reponseBody = await response.json();
    expect(response.status()).toBe(200);
    token = reponseBody.token
    console.log("token=" +token);

})


test.skip("GET api call", async ({ request }) => {
  const response = await request.get(api + "/Bookstore/v1/Books");
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(200);

  expect(responseBody.books[0].title).toEqual("Git Pocket Guide");
  expect(JSON.stringify(responseBody)).toContain("Git Pocket Guide");

});





test.skip("Create a user", async ({ request }) => { 
    const response = await request.post(api + "/Account/v1/User", {
        data:{
            "userName": process.env.API_USER,
            "password": process.env.API_USER_PASSWORD
          }
    })
    const responseBody = await response.json();
    console.log(responseBody)
    user = responseBody.userID
    expect(response.status()).toBe(201);

})


test("Authorize user", async ({ request }) => {
    const response = await request.post(api +"/Account/v1/Authorized", {
        data:{
            "userName": process.env.API_USER,
            "password": process.env.API_USER_PASSWORD
          }
    })
    const reponseBody = await response.json();
    expect(response.status()).toBe(200);
})


test("GET user", async ({ request }) => {
    const response = await request.get(`${api}/Account/v1/User/${userID}`, {
        headers:{
            'Authorization': `Bearer ${token}`,
          } 

    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
  })




  
  
test("Adding books", async ({ request }) => {
    const response = await request.post(api +"/BookStore/v1/Books", {
        headers:{
            'Authorization': `Bearer ${token}`,
          }, 
        data:{
            "userId": userID,
            "collectionOfIsbns": [
                {
                  "isbn": "9781449325862"
                },
                {
                    "isbn": "9781449331818"
                }
              ]
          }
    })
    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    console.log(responseBody);
})



test("GET user- check books", async ({ request }) => {
    const response = await request.get(`${api}/Account/v1/User/${userID}`, {
        headers:{
            'Authorization': `Bearer ${token}`,
          } 

    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody.books[0].isbn).toEqual("9781449325862");
  
  })


  test.skip("PUT change ISBN", async ({ request }) => {
    const response = await request.put(`${api}/BookStore/v1/Books/9781449325862`, {
        headers:{
            'Authorization': `Bearer ${token}`
          }, 
          params:{
              "userId": userID,
              "isbn": "9781449331818"  
            }

    })
    //const responseBody = await response.json();
    //console.log(responseBody);
    expect(response.status()).toBe(200);

  })


  test.skip("GET user- check books after changing book iban", async ({ request }) => {
    const response = await request.get(`${api}/Account/v1/User/${userID}`, {
        headers:{
            'Authorization': `Bearer ${token}`,
          } 

    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody.books[0].isbn).toEqual("9781449331818");
  
  })



test("Removing all books", async ({ request }) => {
    const response = await request.delete(api +"/BookStore/v1/Books", {
        headers:{
            'Authorization': `Bearer ${token}`,
          }, 
        params:{
            "UserId": userID   
          }
    })
    const responseBody = await response.text();
    expect(response.status()).toBe(204);
    console.log(responseBody);
})


test("GET user- check books after deleting", async ({ request }) => {
    const response = await request.get(`${api}/Account/v1/User/${userID}`, {
        headers:{
            'Authorization': `Bearer ${token}`,
          } 

    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody.books).toStrictEqual([]);
  
  })



