import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import * as fromApp from '../../store/app.reducer'
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { User } from 'src/app/auth/user.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];
  user: User;

  constructor(private productService: ProductService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    debugger
     this.store.select('auth').pipe(
      take(1),
      map(authState => {
        this.user = authState.user;
        console.log(this.user);
      })).subscribe();
    this.productService.getProducts().subscribe(
      (resp: any) => {
        this.products = resp;
      }
    );
  }

}
