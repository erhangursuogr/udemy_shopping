import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  isAuth: boolean = false;
  filterText: string = "";

  @Output() myEvent = new EventEmitter();

  constructor(
    private toastrService: ToastrService,
    private productService: ProductService,
    private basketService: BasketService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {       
    this.getPrdoucts();
    //this.getPrdoucts2();    
  }

  ngAfterContentChecked() {
    this.isAuth = this.authService.isAuth;
  }

  getPrdoucts() {
    this.spinner.show();
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        setTimeout(() => {
          this.spinner.hide(); //spinner ends after 0,5 seconds
        },500);
        this.products = res.data;
      },
      error: (error: HttpErrorResponse) => { 
        error.status == 404 ? this.toastrService.error("Api Not Found", "Error") : console.log(error)        
      }
    });
  }

  getPrdoucts2() {
    this.productService.getProducts2().subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (error: HttpErrorResponse) => { 
        error.status == 404 ? this.toastrService.error("Api Not Found", "Error") : console.log(error) 
      }
    });
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
