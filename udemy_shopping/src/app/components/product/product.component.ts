import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basketModel';
import { ProductModel } from 'src/app/models/productModel';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products: ProductModel[] = [];
  baskets: BasketModel[] = [];
  isAuth: boolean = false;

  @Output() myEvent = new EventEmitter();

  constructor(
    private toastrService: ToastrService,
    private productService: ProductService,
    private basketService: BasketService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response:any) => {
      this.products = response;
    }, (error:any) => {
      console.log(error);
    });
  }


  ngAfterContentChecked() {
    this.isAuth = this.authService.isAuth;
  }

  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-" + product.name)).value);
    if (basketModel.quantity < 1) {
      this.toastrService.error("Quantity must be greater than 0", "Error");
      (<HTMLInputElement>document.getElementById("quantity-" + product.name)).value = "1";
      return;
    }
    (<HTMLInputElement>document.getElementById("quantity-" + product.name)).value = "1";
    this.basketService.addBasket(basketModel);
  }

}
