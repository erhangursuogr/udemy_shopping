import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {

  updateForm!: FormGroup;
  productModel: ProductModel = new ProductModel();

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductById();
    this.updateFormBuilder();
  }

  updateFormBuilder() {
    this.updateForm = this.formBuilder.group({
      id: [this.productModel.id],
      name: [this.productModel.name, [Validators.required, Validators.minLength(3)]],
      inventoryQuantity: [this.productModel.inventoryQuantity, [Validators.required, Validators.min(1)]],
      price: [this.productModel.price, [Validators.required, Validators.min(0)]],
      imageUrl: [this.productModel.imageUrl, [Validators.required]]
    });
  }

  getProductById() {
    //let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    let id: number = 0;
    this.activatedRoute.params.subscribe(params => {
      id = params['id'];
    });
    this.productService.getProductById(id).subscribe((response:any) => {
      this.productModel = response;
    }, (error:any) => {
      console.log(error);
    });
  };

  updateProduct() {
    if (this.updateForm.valid) {
      // let productModel = Object.assign({}, this.updateForm.value);
      this.productService.updateProduct(this.updateForm.value);
      this.router.navigate(['/']);
    }
  }

}
