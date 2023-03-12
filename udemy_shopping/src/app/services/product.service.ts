import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [
    { id: 1, name: 'Product A', stock: 20, price: 100, image: 'https://picsum.photos/150/200' },
    { id: 2, name: 'Product B', stock: 18, price: 200, image: 'https://picsum.photos/151/200' },
    { id: 3, name: 'Product C', stock: 16, price: 300, image: 'https://picsum.photos/150/201' },
    { id: 4, name: 'Product D', stock: 15, price: 400, image: 'https://picsum.photos/149/200' },
    { id: 5, name: 'Product E', stock: 14, price: 500, image: 'https://picsum.photos/149/201' },
    { id: 6, name: 'Product F', stock: 13, price: 600, image: 'https://picsum.photos/149/199' },
    { id: 7, name: 'Product G', stock: 12, price: 700, image: 'https://picsum.photos/150/199' },
    { id: 8, name: 'Product H', stock: 11, price: 800, image: 'https://picsum.photos/151/199' },
    { id: 9, name: 'Product K', stock: 10, price: 900, image: 'https://picsum.photos/151/201' },
    { id: 10, name: 'Product L', stock: 9, price: 1000, image: 'https://picsum.photos/148/200' }];

  constructor(
    private toastrService: ToastrService
  ) { }

  getProducts(): Observable<any> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any> {
    return of(this.products.find(p => p.id == id));
  }

  addProduct(product: ProductModel): boolean {
    let length = this.products.filter(p => p.name?.toLocaleLowerCase() == product.name?.toLocaleLowerCase()).length;
    if (length == 0) {
      product.id = this.products.length + 1;
      this.products.push(product);
      this.toastrService.success(product.name + " added to basket", "Success");
      return true;
    } else {
      this.toastrService.error(product.name + " already exists", "Error");
      return false;
    }
  }

  updateProduct(product: ProductModel): void {
    let model: ProductModel = this.products.find(p => p.id == product.id)!;
    let index = this.products.indexOf(model);
    this.products[index] = product;
    this.toastrService.success(product.name + " updated", "Success");
  }

  // deleteProduct(id: number): void {
  //   this.products.splice(id, 1);
  // }
}
