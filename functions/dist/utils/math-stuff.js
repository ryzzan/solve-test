"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debtToIncomeRatio = void 0;
const debtToIncomeRatio = (user) => {
    const monthlyLoanPayments = [];
    user.loans.forEach((object) => {
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                if (key === "monthlyPayment") {
                    monthlyLoanPayments.push(object[key]);
                }
            }
        }
    });
    const totalMonthlyLoanPayment = monthlyLoanPayments.reduce(sumMonthlyPayment);
    const grossMonthlyDebt = totalMonthlyLoanPayment + user.totalMonthlyExpenses;
    const grossMonthlyIncome = user.grossIncome / 12;
    const debtToIncomeRatio = grossMonthlyDebt / grossMonthlyIncome;
    return {
        name: user.name,
        debtToIncomeRatio,
        grossMonthlyDebt,
        grossMonthlyIncome,
    };
};
exports.debtToIncomeRatio = debtToIncomeRatio;
const sumMonthlyPayment = (total, num) => {
    return total + num;
};
//# sourceMappingURL=math-stuff.js.map