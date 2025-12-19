import { Component, inject } from '@angular/core';
import { APP_SERVICE } from '../app.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  readonly appService = inject(APP_SERVICE);

  get investmentResults() {
    return this.appService.investmentResults;
  }
}
