import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MesseageService } from 'src/app/services/messeage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart = [];

  constructor(private cartService: CartService,
    private msg: MesseageService) { }

  ngOnInit(): void {
    this.handleMsgSubscription();
    this.getCart();
  }

  handleMsgSubscription()
  {
    this.msg.getMsg().subscribe((product: Product) => {
      this.getCart();
    });
  }

  getCart() {
    this.cartService.getCart().subscribe(cartItem => {
       this.cart = cartItem;
    });
  }

}
