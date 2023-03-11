import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basketModel';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  @Input() baskets: BasketModel[] = [];
  @Input() totalPrice: number = 0;

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  deleteBasket(basket: BasketModel) {
    this.baskets.splice(this.baskets.indexOf(basket), 1);
    this.totalPrice -= (basket.quantity as number * (basket.product?.price ? basket.product.price : 0));
    this.toastrService.error(basket.product?.name + " deleted from basket", "Deleted");
  }

  calculateBasket() {
    this.totalPrice = 0;
    this.baskets.forEach(basket => {
      this.totalPrice += (basket.quantity as number * (basket.product?.price ? basket.product.price : 0));
    });
    return this.totalPrice;
  }

  changeData(basket: BasketModel) {
    let quantity = parseInt((<HTMLInputElement>document.getElementById("basketquantity-" + basket.product?.name)).value);
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index, 1);
    basket.quantity = quantity;
    this.baskets.push(basket);
    this.calculateBasket();
  }

  payment(event: any) {
    if (this.totalPrice == event.data) {
      let count = this.baskets.length;
      this.baskets.splice(0, count);
      this.toastrService.info("Payment is successful. Total price: " + this.totalPrice, "Success");
    }
  }
} 
