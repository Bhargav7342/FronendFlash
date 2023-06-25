import { Component, Input, OnInit } from '@angular/core';
import { Flashes } from 'src/app/Models/database.models';
import { MatDialog } from '@angular/material/dialog';
import { TableComponent } from '../table/table.component';
import { AnswerComponent } from '../answer/answer.component';
import { FlashcardsService } from 'src/app/Services/flashcards.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  constructor(private dailogbox:MatDialog,private cardservice:FlashcardsService,private router:Router)
  {}

  @Input() flipCard:boolean= false;
  datasets:Flashes[]=[];

  ngOnInit(): void {
    this.cardservice.getCardDetails().subscribe({
      next:(respose)=>
      {
        console.log(respose);
        this.datasets=respose;
      },
      error:(e)=>{
        window.alert("Something went wrong");
      }
    })
    
  }
  


openDailog(value:string){
  this.dailogbox.open(AnswerComponent,{
    height:'300px',
      width:'600px',
      data:{
        dataKey:value
      }
  });
}
}