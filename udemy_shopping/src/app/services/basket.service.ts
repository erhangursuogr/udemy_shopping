import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from '../models/basketModel';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baskets: BasketModel[] = [];
  totalPrice: number = 0;

  constructor(
    private toastrService: ToastrService,
    private orderService: OrderService
  ) { }

  addBasket(basket: BasketModel) {
    let value: BasketModel[] = this.baskets.filter(b => b.product == basket.product);
    if (value.length > 0) {
      this.changeData(value[0], (value[0].quantity as number + basket.quantity!));
    } else {
    this.baskets.push(basket);
    this.toastrService.success(basket.product?.name + " added to basket", "Success");
    }
    this.calculateBasket();
  }

  deleteBasket(basket: BasketModel) {
    this.baskets.splice(this.baskets.indexOf(basket), 1);
    this.totalPrice -= (basket.quantity as number * (basket.product?.price ? basket.product.price : 0));
    this.toastrService.error(basket.product?.name + " deleted from basket", "Deleted");
    this.calculateBasket();
  }

  changeData(basket: BasketModel, quantity: number) {
    let index = this.baskets.indexOf(basket);
    this.baskets[index].quantity = quantity;
    //let quantity = parseInt((<HTMLInputElement>document.getElementById("basketquantity-" + basket.product?.name)).value);
    // this.baskets.splice(index, 1);
    // basket.quantity = quantity;
    // this.baskets.push(basket);
    this.calculateBasket();
  }

  payment(totalPrice: number) {
    if (this.totalPrice == totalPrice) {
      let count = this.baskets.length;
      this.orderService.addOrder(this.baskets as any);
      //this.baskets.splice(0, count);
      this.toastrService.info("Payment is successful. Total price: " + this.totalPrice, "Success");
    }
    this.calculateBasket();
  }

  calculateBasket() {
    this.totalPrice = 0;
    this.baskets.forEach(basket => {
      this.totalPrice += (basket.quantity as number * (basket.product?.price ? basket.product.price : 0));
    });
  }
}
