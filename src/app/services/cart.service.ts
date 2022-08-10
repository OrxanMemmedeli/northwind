import { Injectable } from '@angular/core';
import { CartItem } from '../Models/cartItem';
import { CartItems } from '../Models/cartItems';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(todo: Todo) {
    let item = CartItems.find((c) => c.todo.id === todo.id);
    if (item) {
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.quantity=1;
      cartItem.todo = todo;

      CartItems.push(cartItem);
    }
  }

  list():CartItem[]{
    return CartItems;
  }

  removeItemFormCart(todo: Todo) {
    let item = CartItems.find((c) => c.todo.id === todo.id);
    if (item) {
      CartItems.splice(CartItems.indexOf(item), 1);
    }
  }
}
