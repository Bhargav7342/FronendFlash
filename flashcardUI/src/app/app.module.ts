import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { AnswerComponent } from './components/answer/answer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule }   from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { FlashcardsService } from './Services/flashcards.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    AnswerComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
