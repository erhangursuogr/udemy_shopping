import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  @ViewChild('productName') productName!: ElementRef;
  @ViewChild('productStock') productStock!: ElementRef;
  @ViewChild('productPrice') productPrice!: ElementRef;
  @ViewChild('productImage') productImage!: ElementRef;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void { }

  addProduct(name: any, stock: any, price: any, image: any) {
    if (name.value == "" || stock.value == "" || price.value == "") {
      alert("Please fill in all the fields");
      return;
    }
    let product = new ProductModel();
    product.name = name.value;
    product.stock = stock.value;
    product.price = price.value;
    product.image = image.value;
    let status:Boolean = this.productService.addProduct(product);
    if (status) {
      this.clearElements();
    }
  }

  clearElements() {
    this.productName.nativeElement.value = "";
    this.productStock.nativeElement.value = "";
    this.productPrice.nativeElement.value = "";
    this.productImage.nativeElement.value = "https://picsum.photos/150/200";
  }

}
