import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItems } from 'src/app/Models/cartItems';
import { Todo } from 'src/app/Models/todo';
import { CartService } from 'src/app/services/cart.service';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getTodosByUser(params['id']);
      } else {
        this.getTodos();
      }
    });
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      (this.todos = response), (this.dataLoaded = true);
    });
  }

  getTodosByUser(id: number) {
    this.todoService.getTodosByUser(id).subscribe((response) => {
      (this.todos = response), (this.dataLoaded = true);
    });
  }

  addToCart(todo: Todo) {
    this.cartService.addToCart(todo);
    this.toastrService.success('Səbətə əlvə edildi.', todo.title);
  }


}
