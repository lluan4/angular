import { Injectable } from '@angular/core';
import { AnnualData } from './user-input/user-input.interface';

@Injectable({ providedIn: 'root' })
export class AppService {
  #investmentResults: AnnualData[] = [];

  get investmentResults(): AnnualData[] {
    return this.#investmentResults;
  }

  set investmentResults(results: AnnualData[]) {
    this.#investmentResults = results;
  }
}
