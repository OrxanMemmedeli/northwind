import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/loginModel';
import { LoginResponseModel } from '../Models/loginResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://dummyjson.com";

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel){
    let newPath = this.apiUrl + "/auth/login";

    return this.httpClient.post<LoginResponseModel>(newPath,loginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
