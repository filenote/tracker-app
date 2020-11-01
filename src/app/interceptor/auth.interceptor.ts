import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  error = (response: any) => {
    if (response instanceof HttpErrorResponse) {
      if (response.status === 403) {
        localStorage.removeItem('token');
      }
    }
    return throwError(response);
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    if (!!token) {
      const tokenizedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next
        .handle(tokenizedRequest)
        .pipe(catchError(this.error));
    }
    return next
      .handle(request)
      .pipe(catchError(this.error));
  }
}
