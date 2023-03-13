import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/productModel';
import { ResultDataModel } from '../models/resultDataModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [
    { id: 1, name: 'Product A', inventoryQuantity: 20, price: 100, imageUrl: 'https://picsum.photos/150/200' },
    { id: 2, name: 'Product B', inventoryQuantity: 18, price: 200, imageUrl: 'https://picsum.photos/151/200' },
    { id: 3, name: 'Product C', inventoryQuantity: 16, price: 300, imageUrl: 'https://picsum.photos/150/201' },
    { id: 4, name: 'Product D', inventoryQuantity: 15, price: 400, imageUrl: 'https://picsum.photos/149/200' },
    { id: 5, name: 'Product E', inventoryQuantity: 14, price: 500, imageUrl: 'https://picsum.photos/149/201' },
    { id: 6, name: 'Product F', inventoryQuantity: 13, price: 600, imageUrl: 'https://picsum.photos/149/199' },
    { id: 7, name: 'Product G', inventoryQuantity: 12, price: 700, imageUrl: 'https://picsum.photos/150/199' },
    { id: 8, name: 'Product H', inventoryQuantity: 11, price: 800, imageUrl: 'https://picsum.photos/151/199' },
    { id: 9, name: 'Product K', inventoryQuantity: 10, price: 900, imageUrl: 'https://picsum.photos/151/201' },
    { id: 10, name: 'Product L', inventoryQuantity: 9, price: 1000, imageUrl: 'https://picsum.photos/148/200' }];

  constructor(
    private toastrService: ToastrService,
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<ResultDataModel<ProductModel>> {
    return this.httpClient.get<ResultDataModel<ProductModel>>("https://webapi.angulareducation.com/api/products/getlist");
  }

  getProducts2(): Observable<any> {
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
 
}
