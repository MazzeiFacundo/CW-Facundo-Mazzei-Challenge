const chai = require('chai');
const expect = chai.expect
const request = require('supertest')("localhost:3001");

describe("GET /iecho/iecho?text=test", function () {
  it("returns a string backwards", async function() {
    const response = await request.get("/iecho/iecho?text=test");
    expect(response.status).to.eql(200);
    expect(response.body.text).to.eql("tset");
  });
});

