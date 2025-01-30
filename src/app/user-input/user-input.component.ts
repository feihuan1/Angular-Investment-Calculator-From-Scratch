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

  validateDuration() {
    const inputs: number[] = Object.values(this.userInput)

    if(this.userInput.duration > 100) {
      this.userInput.duration = 100
      return false
    }

    for(let num of inputs) {
      if(num < 0) {
        return false
      }
    }
    
    return true
  }

  onSubmit() {
    const isValid = this.validateDuration()
    console.log(isValid)
    if(!isValid){
      alert("Plz use common sense to enter some valid input!!!")
      return
    }

    this.investmentData.emit(this.userInput)

    this.userInput = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10
    } 
  }

}
