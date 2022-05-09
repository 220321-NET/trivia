import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private categoryurl : string = "";

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    let baseurl = 'https://opentdb.com/api.php?amount=10';
    return this.http.get<any>(baseurl + this.categoryurl);
    //return this.http.get<any>("assets/questions.json");

  // getQuestionJson(){
  //   return this.http.get<any>('https://opentdb.com/api.php?amount=10');
  //   //return this.http.get<any>("assets/questions.json");

  // }
  getQuestionByInputJson(id: any, difficulty: any, amount: any){

 }
  getQuestionByCategoryJson(id: any){

    if(id > 0)
    {
      return this.http.get<any>(`https://opentdb.com/api.php?amount=${amount}&category=${id}&difficulty=${difficulty}`);
    }
    else
    {
      return this.http.get<any>('https://opentdb.com/api.php?amount=10');
    }

    

  }

  setCategory(category: number)
  {
    this.categoryurl = `&category=${category}`;

  }

}
