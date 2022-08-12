import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { CategoryComponent } from './components/category/category.component';
import { CommentComponent } from './components/comment/comment.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthQuotesComponent } from './components/auth-quotes/auth-quotes.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:TodoComponent},
  {path:"todos", component:TodoComponent},
  {path:"categories", component:CategoryComponent},
  {path:"todos/:id", component:TodoComponent},
  {path:"todo/add", component:TodoAddComponent},
  {path:"comments", component:CommentComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"auth/quotes", component:AuthQuotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 