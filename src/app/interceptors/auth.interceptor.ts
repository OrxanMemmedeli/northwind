import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token"); //browserdeki tokeni yaxalamaq
    let httpRequest: HttpRequest<any>; // gonderilen request-i yaxalamaq

    let newRequest = request.clone({
      headers: request.headers.set("Authorization", "Bearer " +token)
    });

    return next.handle(newRequest);
  }
}

