import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  addForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addFormBuilder();
  }

  addFormBuilder() {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      stock: ['1', [Validators.required, Validators.min(1)]],
      price: ['0', [Validators.required, Validators.min(0)]],
      image: ['https://picsum.photos/150/200', [Validators.required]]
    });
  }

  addProduct() {
    if (this.addForm.valid) {
      let productModel = Object.assign({}, this.addForm.value);
      let status: Boolean = this.productService.addProduct(productModel);
      if (status) {
        this.addForm.reset();
      }
    }
  }

}
