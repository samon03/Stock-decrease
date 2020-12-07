import { ProductService } from './../../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MesseageService } from 'src/app/services/messeage.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() pro: Product;
  constructor(private cartService: CartService,
    private msg: MesseageService,
    private productService: ProductService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.postCartItem(this.pro).subscribe(() =>{
      this.msg.sendMsg(this.pro);
    });
  }
}
