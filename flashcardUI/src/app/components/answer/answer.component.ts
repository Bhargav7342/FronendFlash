import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlashcardsService } from 'src/app/Services/flashcards.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit{ 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private cardservice:FlashcardsService){}

  answer:string='';
  Id:string='';
  ngOnInit(): void {
    this.Id=this.data.dataKey;
    console.log(this.Id)
    this.cardservice.getCardsById(this.Id).subscribe({
      next:(response)=>{
        this.answer=response.answer;
        console.log(this.answer);
      }
    })
  }
}
