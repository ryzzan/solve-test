import * as chai from "chai";
import * as dataValidation from "../utils/data-validation";
import {schema} from "../features/users/users.model";
import * as chaiAsPromised from "chai-as-promised";

const expect = chai.expect;
chai.use(chaiAsPromised);

describe("data validation", () => {
  context("validate data", () => {
    it("should validate an error according to joi schema", async () => {
      await expect(dataValidation.validateSchema(schema, {}))
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
      await expect(dataValidation.validateSchema(schema, objectToValidate))
          .to.eventually.be.false;
    });
  });
});

