import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createTodoAddForm();
  }

  createTodoAddForm() {
    this.todoAddForm = this.formBuilder.group({
      // ["baslangic deyer", Validator attribute-lari]
      userId: ['', Validators.required],
      title: ['', Validators.required],
      completed: [true, Validators.required],

      // id:number;
      // userId:number;
      // title:string;
      // completed:boolean;
    });
  }

  add() {
    if (this.todoAddForm.valid) {
      let todoModel = Object.assign({}, this.todoAddForm.value);
      this.todoService.add(todoModel).subscribe((data) => {
        this.toastrService.success(todoModel.title, 'Əlavə Edildi');
      }, errorData => {
        console.log(errorData);
        this.toastrService.error(errorData.error, 'Diqqət');
      });
    } else {
      this.toastrService.error('Form məlumatları tam deyil', 'Diqqət');
    }
  }
}
