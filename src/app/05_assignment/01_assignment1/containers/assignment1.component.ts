import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  userInput: String = "";

  display(inputElement: HTMLInputElement) {
    //console.log(inputName.value);
    this.userInput = inputElement.value;
  }
}

