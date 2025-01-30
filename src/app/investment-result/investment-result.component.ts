import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { type InvestmentResult } from '../../investment-result.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input({required: true}) isUserEntered!: boolean
  @Input({required: true}) userInvestmentResult!: InvestmentResult[]
} 
