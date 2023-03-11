import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  totalPrice: number = 0;
  @Output() myEvent = new EventEmitter();

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.totalPrice = this.basketService.totalPrice;
  }

  payment() {
    this.basketService.payment(this.totalPrice);
    document.getElementById("modalCloseButton")?.click();
  }

}
