import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basketModel';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  @Input() baskets: BasketModel[] = [];
  totalPrice: number = 0;

  constructor(
    private toastrService: ToastrService,
    private basketService: BasketService
    ) { }

  ngOnInit(): void {
    this.baskets = this.basketService.baskets;
  }

  ngAfterContentChecked() {
    this.totalPrice = this.basketService.totalPrice;
  }

  deleteBasket(basket: BasketModel) {
    this.basketService.deleteBasket(basket);
  }

  changeData(basket: BasketModel, quantity: any) {
    this.basketService.changeData(basket, quantity.value);
  }
}
