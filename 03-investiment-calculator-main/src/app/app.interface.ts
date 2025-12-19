import { inject, InjectionToken } from '@angular/core';
import { AnnualData } from './user-input/user-input.interface';
import { AppService } from './app.service';

export interface IAppService {
  investmentResults: AnnualData[];
}

export const APP_SERVICE = new InjectionToken<IAppService>('APP_SERVICE', {
  providedIn: 'root',
  factory: () => inject(AppService),
});
