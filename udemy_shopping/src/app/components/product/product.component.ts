import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basketModel';
import { ProductModel } from 'src/app/models/productModel';
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

  @Output() myEvent = new EventEmitter();

  constructor(
    private toastrService: ToastrService,
    private productService: ProductService,
    private basketService: BasketService
    ) { }

  ngOnInit(): void {
    this.products = this.productService.products;
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
