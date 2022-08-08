import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/Models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.commentService.getTodos().subscribe(responce => {
      this.comments = responce;
    })
  };
}
