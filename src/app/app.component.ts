import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';

import { calculateInvestmentResults } from '../investment-results';

import { InvestmentResult } from '../investment-result.model';
import { type UserInput } from './user-input/user-input.model';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  isUserEntered = false
  userInvestmentResult: InvestmentResult[] = [{
    annualInvestment: 0,
    interest: 0,
    totalAmountInvested: 0,
    totalInterest: 0,
    valueEndOfYear: 0,
    year: 0,
  }];

  onRecieveInvestmentData(data: UserInput) {

    this.isUserEntered = data.initialInvestment || data.annualInvestment ? true : false

    this.userInvestmentResult = [...calculateInvestmentResults(data)];

    console.log(this.isUserEntered);
    console.log(this.userInvestmentResult);
  }
}
