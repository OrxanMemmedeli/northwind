import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {productId:1, productName: "Bardak", categoryId:2, unitPrice:5};
  product1 = {productId:2, productName: "Bardak1", categoryId:2, unitPrice:10};
  product2 = {productId:3, productName: "Bardak2", categoryId:2, unitPrice:15};
  product3 = {productId:4, productName: "Bardak3", categoryId:1, unitPrice:20};
  product4 = {productId:5, productName: "Bardak4", categoryId:1, unitPrice:25};
  product5 = {productId:6, productName: "Bardak5", categoryId:1, unitPrice:30};

  products = [
    this.product,
    this.product1,
    this.product2,
    this.product3, 
    this.product4,
    this.product5
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
