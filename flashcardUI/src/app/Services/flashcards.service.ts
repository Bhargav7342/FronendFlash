import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Flashes } from '../Models/database.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  baseApiUrl:string=environment.baseApiUrl;


  constructor(private http:HttpClient) { }

  addCard(addCardData:Flashes):Observable<Flashes>
  {
    return this.http.post<Flashes>(this.baseApiUrl+'api/Flashcard/Add_Flashcard',addCardData)
  }

  getCardDetails():Observable<Flashes[]>
  {
    return this.http.get<Flashes[]>(this.baseApiUrl+'api/Flashcard/Get_All_Cards')
  }

  getCardsById(id:string):Observable<Flashes>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Id':id
    });

    return this.http.get<Flashes>(this.baseApiUrl+'api/Flashcard/GetCardById',{headers:header})
  }

  deleteCards(id:string):Observable<Flashes>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Id':id
    });

    return this.http.delete<Flashes>(this.baseApiUrl+'api/Flashcard/Delete_Flashcard',{headers:header})
  }

  updateCard(updateCard:Flashes):Observable<Flashes>
  {
    return this.http.put<Flashes>(this.baseApiUrl+'api/Flashcard/Update_Flashcard',updateCard)
  }
}
