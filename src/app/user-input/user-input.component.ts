import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() investmentData = new EventEmitter<UserInput>()

  userInput: UserInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10
  } 

  onSubmit() {
    this.investmentData.emit(this.userInput)
    this.userInput = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10
    } 
  }

}
