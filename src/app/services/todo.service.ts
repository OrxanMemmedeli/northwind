import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Todo[]> {
    let newPath = this.apiUrl+"/todos";
    return this.httpClient.get<Todo[]>(newPath);
  }

  getTodosByUser(id: number):Observable<Todo[]> {
    let newPath = this.apiUrl+"/todos?userId=" + id;
    return this.httpClient.get<Todo[]>(newPath);
  }
}
