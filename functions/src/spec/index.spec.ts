import * as chai from "chai";
import * as request from "supertest";
import {app} from "../index";

const expect = chai.expect;

describe("app", () => {
  context("GET /users", () => {
    it("should get /users", (done) => {
      request(app).get("/users")
          .expect(200)
          .end((err, response) => {
            expect(response.body)
                .to.have.property("message")
                .to.be.equal("Success!");
            done(err);
          });
    });
  });

  context("GET /users/debtToIncomeRatio", () => {
    it("should return debt to income ratio", (done) => {
      request(app).get("/users/debtToIncomeRatio/J4kk0xHdOSAuTYH5CMOq")
          .expect(200)
          .end((err, response) => {
            expect(response.body)
                .to.have.property("data")
                .to.be.deep.equal({
                  name: "Ellen Ripley",
                  debtToIncomeRatio: 0.5194029850746269,
                  grossMonthlyDebt: 2900,
                  grossMonthlyIncome: 5583.333333333333,
                });
            done(err);
          });
    });
  });
});
