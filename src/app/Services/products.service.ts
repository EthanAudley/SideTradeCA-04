import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../product-list/product-list.model";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>("/api/product").toPromise();
  }
}