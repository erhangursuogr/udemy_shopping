import { Component } from '@angular/core';
import { BasketModel } from 'src/app/models/basketModel';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  baskets: BasketModel[] = [];
  totalPrice: number = 0;
  isAuth: boolean = false;

  constructor(
    private basketService: BasketService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.baskets = this.basketService.baskets;
    this.isAuth = this.authService.isAuthenticated();
  }

  ngAfterContentChecked() {
    this.totalPrice = this.basketService.totalPrice;
    this.isAuth = this.authService.isAuthenticated();
  }

  login(){
    this.authService.signIn();
  }

  logout(){
    this.authService.signOut();
  }

}
