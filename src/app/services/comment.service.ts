import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Comment[]> {
    let newPath = this.apiUrl+"/comments";
    return this.httpClient.get<Comment[]>(newPath);
  }
}
