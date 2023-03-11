import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basketModel';
import { OrderModel } from '../models/orderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: OrderModel[] = [];

  constructor() { }

  addOrder(basketModel: BasketModel) {

    let order: OrderModel = { basket: basketModel as any, date: new Date() };
    this.orders.push(order);
    console.log(this.orders);
  }

}
