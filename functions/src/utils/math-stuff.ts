const debtToIncomeRatio = (user: any) => {
  const monthlyLoanPayments: Array<any> = [];

  user.loans.forEach((object: any) => {
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

const sumMonthlyPayment = (total: number, num: number) => {
  return total + num;
};

export {debtToIncomeRatio};
