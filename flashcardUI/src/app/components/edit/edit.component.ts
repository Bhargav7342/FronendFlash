import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flashes } from 'src/app/Models/database.models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  cards:any={
    id:'',
    question:'',
    answer:''
  }

  id:string|any='';
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){

  }

  editdetails(item:Flashes)
  {
    console.log(item);
  }


}
