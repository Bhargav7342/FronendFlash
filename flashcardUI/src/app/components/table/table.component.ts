import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { FlashcardsService } from 'src/app/Services/flashcards.service';
import { Flashes } from 'src/app/Models/database.models';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit{
  constructor(private dailogbox:MatDialog,private cardservice:FlashcardsService,private router:Router){

  }
  cards:Flashes[]=[];
  ngOnInit(): void {
    this.cardservice.getCardDetails().subscribe({
      next:(response)=>{
        this.cards=response;
        this.dataSource=this.cards;
        console.log(this.dataSource);
      }
    })
  }
  @Input() flipCard:boolean= false;
  displayedColumns: string[] = ['Question', 'Answer','Options'];
  dataSource = this.cards;

  editdata(value:string) {
    this.dailogbox.open(EditComponent,{
      height:'300px',
      width:'400px',
      data:{
        dataKey:value
      }
    });
  }
  
  deletedata(value:string)
  {
    this.cardservice.deleteCards(value).subscribe({
      next:(response)=>{
        console.log(response);
        window.alert("Deleted Successfully");
      }
    })
    console.log(value);
  }
}
