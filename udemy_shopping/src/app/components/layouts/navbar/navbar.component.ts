import { Component } from '@angular/core';
import { BasketModel } from 'src/app/models/basketModel';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  baskets: BasketModel[] = [];
  totalPrice: number = 0;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.baskets = this.basketService.baskets;
  }

  ngAfterContentChecked() {
    this.totalPrice = this.basketService.totalPrice;
  }

}
