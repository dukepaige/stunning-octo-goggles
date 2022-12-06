import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.scss']
})
export class MycompComponent {

  constructor(){

  }
  public logMe(){
    console.log('hello paige and steve and beanie')
  }

}
