import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';
import { take, exhaustMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        let modifiedReq: any;
        if (!user) {
          modifiedReq = req.clone({
            url: environment.serverUrl + req.url
          });
        } else {
          let headersChanged = req.headers;
          if (user.token) {
            headersChanged = headersChanged.set('Authorization', 'Bearer ' + user.token);
          }
          modifiedReq = req.clone({
            headers: headersChanged,
            url: environment.serverUrl + req.url,
            //params: new HttpParams().set('auth', user.token)
          });
        }

        return next.handle(modifiedReq).pipe(catchError(error => this.errorHandler(error)));
      })
    );
  }
  private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    alert('Handle error');
    throw response;
  }
}
