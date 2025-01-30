// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it
import { UserInput } from "./app/user-input/user-input.model";

export function calculateInvestmentResults(userInput: UserInput) {
  const annualData = [];
  let initialInvestment = userInput.initialInvestment;
  let expectedReturn = userInput.expectedReturn;
  let annualInvestment = userInput.annualInvestment;
  let duration = userInput.duration;
  
  let investmentValue = initialInvestment;
  
  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
