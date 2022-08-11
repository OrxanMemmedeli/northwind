import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { GetDomainNamePipe } from './pipes/get-domain-name.pipe';
import { CommentComponent } from './components/comment/comment.component';
import { FilterTitlePipe } from './pipes/filter-title.pipe';

import { ToastrModule } from 'ngx-toastr';

import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent,
    UserComponent,
    GetDomainNamePipe,
    CommentComponent,
    FilterTitlePipe,
    CartSummaryComponent,
    TodoAddComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
