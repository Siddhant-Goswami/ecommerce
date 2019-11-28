const supertest = require("supertest");
const app = require("../app");

describe("GET /api/products", function() {
  it("it should has status code 200", async () => {
    const res = await supertest(app)
    .get('/api/products')
  expect(res.statusCode).toEqual(200)
})
});