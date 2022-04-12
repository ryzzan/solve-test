"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const Joi = require("joi");
const loans = Joi.object().keys({
    type: Joi.string(),
    loanAmount: Joi.number(),
    originationDate: Joi.date(),
    monthlyPayment: Joi.number(), // TO-DO: DECIMAL
});
const schema = Joi.object({
    name: Joi.string().min(3).required(),
    grossIncome: Joi.number(),
    loans: Joi.array().items(loans),
    totalMonthlyExpenses: Joi.number().required(),
    taxRate: Joi.number().required(), // TO-DO: DECIMAL
});
exports.schema = schema;
//# sourceMappingURL=users.model.js.map