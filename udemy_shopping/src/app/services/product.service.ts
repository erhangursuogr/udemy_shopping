import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [
    { name: 'Product A', stock:20, price: 100, image: 'https://picsum.photos/150/200' },
    { name: 'Product B', stock:18, price: 200, image: 'https://picsum.photos/151/200' },
    { name: 'Product C', stock:16, price: 300, image: 'https://picsum.photos/150/201' },
    { name: 'Product D', stock:15, price: 400, image: 'https://picsum.photos/149/200' },
    { name: 'Product E', stock:14, price: 500, image: 'https://picsum.photos/149/201' },
    { name: 'Product F', stock:13, price: 600, image: 'https://picsum.photos/149/199' },
    { name: 'Product G', stock:12, price: 700, image: 'https://picsum.photos/150/199' },
    { name: 'Product H', stock:11, price: 800, image: 'https://picsum.photos/151/199' },
    { name: 'Product K', stock:10, price: 900, image: 'https://picsum.photos/151/201' },
    { name: 'Product L', stock:9, price: 1000, image: 'https://picsum.photos/148/200' }];

  constructor(
    private toastrService: ToastrService
    ) {}

    addProduct(product: ProductModel): boolean{
      let length = this.products.filter(p => p.name?.toLocaleLowerCase ()== product.name?.toLocaleLowerCase()).length;
      if (length == 0) {
      this.products.push(product);
      this.toastrService.success(product.name + " added to basket", "Success");
      return true;
      } else {
        this.toastrService.error(product.name + " already exists", "Error");
        return false;
      }
    }
}
