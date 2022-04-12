import * as Joi from "joi";

const loans = Joi.object().keys({
  type: Joi.string(),
  loanAmount: Joi.number(),
  originationDate: Joi.date(), // TO-DO: FORMAT DATE
  monthlyPayment: Joi.number(), // TO-DO: DECIMAL
});

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  grossIncome: Joi.number(),
  loans: Joi.array().items(loans),
  totalMonthlyExpenses: Joi.number().required(), // TO-DO: DECIMAL
  taxRate: Joi.number().required(), // TO-DO: DECIMAL
});

export {schema};

