import { Component, OnInit } from '@angular/core';

//import { products } from '../products';
//import { Product } from './product-list.model';
import { ProductService } from '../Services/products.service';
import { Product } from './product-list.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[];

  constructor(private productservice: ProductService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.productservice != null)
    {
      this.productservice.getProducts().then(products => 
        {this.products = products});
  
        //console.table(this.products);
        if (this.products != null)
        {
          this.products.forEach(projet=>console.log(this.products));
        }
    }
   
      
      
  }

  
    
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/