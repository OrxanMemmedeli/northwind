import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { CategoryComponent } from './components/category/category.component';
const routes: Routes = [
  {path:"",pathMatch:"full", component:TodoComponent},
  {path:"todos", component:TodoComponent},
  {path:"categories", component:CategoryComponent},
  {path:"todos/:id", component:TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 