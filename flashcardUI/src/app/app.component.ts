import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddComponent } from './components/add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dailogbox:MatDialog){}
  title = 'flashcardUI';
  flipCard = true;


  flipCardOnClick(){
    this.flipCard = this.flipCard ? false : true;
    console.log(this.flipCard)
  }
  AddNewCard(){
    this.dailogbox.open(AddComponent,{
      height:'350px',
      width:'400px'
    })
  }
}
