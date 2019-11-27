const supertest = require("supertest");
const assert = require('assert');
const app = require("../app");

describe("GET /api/products", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .get("/api/products")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});