"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const dataValidation = require("../utils/data-validation");
const users_model_1 = require("../features/users/users.model");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);
describe("data validation", () => {
    context("validate data", () => {
        it("should validate an error according to joi schema", async () => {
            await expect(dataValidation.validateSchema(users_model_1.schema, {}))
                .to.eventually.be.a("object")
                .with.property("error");
        });
        it("should validate a success according to joi schema", async () => {
            const objectToValidate = {
                name: "Snake Plissken",
                grossIncome: 77800,
                loans: [
                    {
                        type: "Mortgage",
                        loanAmount: 100200,
                        originationDate: "2020-03-23",
                        monthlyPayment: 780.31,
                    },
                ],
                totalMonthlyExpenses: 765.02,
                taxRate: 0.33,
            };
            await expect(dataValidation.validateSchema(users_model_1.schema, objectToValidate))
                .to.eventually.be.false;
        });
    });
});
//# sourceMappingURL=data-validation.spec.js.map