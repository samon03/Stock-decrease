import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(product => {
      this.product = product;
    });
  }

}
