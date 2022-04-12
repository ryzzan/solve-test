import * as chai from "chai";
import {debtToIncomeRatio} from "../utils/math-stuff";

const expect = chai.expect;

describe("debt to income", () => {
  it("should return debt to income", () => {
    const data = {
      "name": "Ellen Ripley",
      "grossIncome": 67000,
      "loans": [
        {
          "type": "Student",
          "loanAmount": 10000,
          "originationDate": "2020-09-10",
          "monthlyPayment": 100,
        },
        {
          "type": "Mortgage",
          "loanAmount": 300000,
          "originationDate": "2022-01-10",
          "monthlyPayment": 1600,
        },
      ],
      "totalMonthlyExpenses": 1200.0,
      "taxRate": 0.3,
    };

    expect(debtToIncomeRatio(data))
        .to.be.deep.equal({
          name: "Ellen Ripley",
          debtToIncomeRatio: 0.5194029850746269,
          grossMonthlyDebt: 2900,
          grossMonthlyIncome: 5583.333333333333,
        });
  });
});
