import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product-list/product-list.model';
import { ProductService } from '../Services/products.service';

//import { products } from '../products';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: Product[];
  product: Product;
  //product as 'product: Product';

 
  constructor(private route: ActivatedRoute, private productservice: ProductService,) { }
  ngOnInit(): void {
    if (this.productservice != null) {
      this.productservice.getProducts().then(products => 
        {this.products = products;

        if (this.products != null) {
          this.route.paramMap.subscribe(params => {
            this.product = products[+params.get('productId')];
          });
        }
      }); 
    }
  }
}