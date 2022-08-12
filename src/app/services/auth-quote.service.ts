import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthListRequestModel } from '../Models/authListRequestModel';
import { Quote } from '../Models/quote';

@Injectable({
  providedIn: 'root'
})
export class AuthQuoteService {

  apiUrl = "https://dummyjson.com";

  constructor(private httpClient: HttpClient) { }

  getQuotes():Observable<AuthListRequestModel<Quote>>{
    let newPath = this.apiUrl+"/auth/quotes";
    return this.httpClient.get<AuthListRequestModel<Quote>>(newPath);
  }
}
