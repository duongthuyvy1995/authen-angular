import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get('/Products/GetProducts');
  }
  addProduct(model: any){
    return this.http.post('/Products/AddProduct', model);
  }

}
