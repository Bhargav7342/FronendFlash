import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flashes } from 'src/app/Models/database.models';
import { FlashcardsService } from 'src/app/Services/flashcards.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  

  id:string|any='';
  dataset:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private cardservice:FlashcardsService){}
  
  ngOnInit(): void {
    console.log(this.data.dataKey);
    this.id=this.data.dataKey
    console.log(this.id);
    this.cardservice.getCardsById(this.id).subscribe({
      next:(response)=>{
        this.dataset=response;
        console.log(response);
        
      }
    })
  }
  cards:any={
    id:this.id,
    question:'',
    answer:''
  }
  
  editdetails(item:Flashes)
  {
    console.log(item);
    this.cards=item;
    this.cards.id=this.id;
    console.log(this.cards);
    this.cardservice.updateCard(this.cards).subscribe({
      next:(response)=>{
        window.alert("Updated Successfully");
      }
    })
  }


}
