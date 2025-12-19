import { Injectable } from '@angular/core';
import {
  AnnualData,
  InvestmentData,
  IUserInputService,
} from './user-input.interface';

@Injectable({ providedIn: 'root' })
export class UserInputService implements IUserInputService {
  calculateInvestmentResults(data: Partial<InvestmentData>): AnnualData[] {
    if (!this.isInvestmentData(data))
      throw new Error('Invalid investment data');

    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;

    const annualData = [];
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

  protected isInvestmentData(
    obj: Partial<InvestmentData>
  ): obj is InvestmentData {
    return (
      typeof obj.initialInvestment === 'number' &&
      typeof obj.annualInvestment === 'number' &&
      typeof obj.expectedReturn === 'number' &&
      typeof obj.duration === 'number'
    );
  }
}
