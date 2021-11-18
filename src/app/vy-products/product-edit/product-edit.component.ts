import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(){
    debugger
    this.productService.addProduct(this.productForm.value).subscribe();
  }
  private initForm() {
    let productName = '';
    let productPrice = '';

    this.productForm = new FormGroup({
      name: new FormControl(productName, Validators.required),
      price: new FormControl(productPrice, Validators.required)
    });
  }
}
