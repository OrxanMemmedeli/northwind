import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/Models/cartItem';
import { Todo } from 'src/app/Models/todo';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
 cartItems: CartItem[];
  constructor(private cartService:CartService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(todo:Todo){
    this.cartService.removeItemFormCart(todo);
    this.toastrService.info(todo.title, "Silinən məlumat:")
  }

}
