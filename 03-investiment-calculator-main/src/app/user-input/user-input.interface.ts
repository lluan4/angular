import { inject, InjectionToken } from '@angular/core';
import { UserInputService } from './user-input.service';

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: any;
  annualInvestment: any;
  totalInterest: number;
  totalAmountInvested: any;
}

export interface InvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface IUserInputService {
  calculateInvestmentResults(data: Partial<InvestmentData>): AnnualData[];
}

export const USER_INPUT_SERVICE = new InjectionToken<IUserInputService>(
  'USER_INPUT_SERVICE',
  {
    providedIn: 'root',
    factory: () => inject(UserInputService),
  }
);
