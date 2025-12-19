import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData, USER_INPUT_SERVICE } from './user-input.interface';
import { APP_SERVICE } from '../app.interface';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  readonly svc = inject(USER_INPUT_SERVICE);
  readonly appService = inject(APP_SERVICE);

  investmentData: Partial<InvestmentData> = {};

  handleSubmit() {
    const results = this.svc.calculateInvestmentResults(this.investmentData);
    this.appService.investmentResults = results;
    this.investmentData = {};
  }
}
