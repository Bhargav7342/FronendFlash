import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flashes } from 'src/app/Models/database.models';
import { FlashcardsService } from 'src/app/Services/flashcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit{
  constructor(private cardservice:FlashcardsService,private router:Router){}

  addCard:Flashes={
    id:'',
    question:'',
    answer:''
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  adddetails(item:any){
    this.addCard=item;
    this.cardservice.addCard(item).subscribe({
      next:(response)=>{
        this.router.navigate(['/cards']);
        console.log(response);
        
      }
    })
  }

}
