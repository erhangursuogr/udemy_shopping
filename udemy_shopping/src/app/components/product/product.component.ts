import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basketModel';
import { ProductModel } from 'src/app/models/productModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products: ProductModel[] = [
    { name: 'Product 1', price: 100, image: 'https://picsum.photos/150/200' },
    { name: 'Product 2', price: 200, image: 'https://picsum.photos/151/200' },
    { name: 'Product 3', price: 300, image: 'https://picsum.photos/150/201' },
    { name: 'Product 4', price: 400, image: 'https://picsum.photos/149/200' },
    { name: 'Product 5', price: 500, image: 'https://picsum.photos/149/201' },
    { name: 'Product 6', price: 600, image: 'https://picsum.photos/149/199' },
    { name: 'Product 7', price: 700, image: 'https://picsum.photos/150/199' },
    { name: 'Product 8', price: 800, image: 'https://picsum.photos/151/199' },
    { name: 'Product 9', price: 900, image: 'https://picsum.photos/151/201' },
    { name: 'Product 10', price: 1000, image: 'https://picsum.photos/148/200' }];

    baskets: BasketModel[] = [];

    @Output() myEvent = new EventEmitter();

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  
  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-"+product.name)).value);
    if (basketModel.quantity < 1) {
      this.toastrService.error("Quantity must be greater than 0", "Error");
      (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value = "1";
      return;
    }
    (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value = "1";
    this.baskets.push(basketModel);
    this.myEvent.emit({data: this.baskets});
    this.toastrService.success(product.name + " added to basket", "Success");
  }

}
