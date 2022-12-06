import { Component } from '@angular/core';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss']
})
export class RpsComponent {
  logThis() {
    console.log(this.getComputerChoice())
  }
  getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
      default:
        return null;
    }
  };
}
