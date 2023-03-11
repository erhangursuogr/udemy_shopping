import { Component } from '@angular/core';
import { OrderModel } from 'src/app/models/orderModel';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  orders: OrderModel[] = [];
  totalPrice: number = 0;

  constructor(
    private orderService: OrderService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.orders = this.orderService.orders;
    this.totalPrice = this.basketService.totalPrice;
  }
}
