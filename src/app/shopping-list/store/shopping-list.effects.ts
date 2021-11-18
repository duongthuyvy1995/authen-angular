import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as ShoppingListActions from './shopping-list.actions';
import { Product } from '../shopping-edit/product.model';

export interface AuthResponseData {
  kind: string;
  token: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  userId: string;
  registered?: boolean;
}


@Injectable()
export class ShoppingListEffects {
  @Effect()
  getProduct = this.actions$.pipe(
    ofType(ShoppingListActions.GET_PRODUCT),
    switchMap((data: ShoppingListActions.GetProduct) => {
      return this.http
        .get('/Products/GetProducts')
        .pipe(
          map((resData:Product[]) => {
            return new ShoppingListActions.GetProductSuccess(resData);
          })
        );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
